var stageRef;	
var symbolRef;
var endGameRef;
var uitlegRef;
var timer;

var iStap = 0;

var arrScores = new Array();

var iP1Left = 1;
var iP1Right = 1;
var iP2Left = 1;
var iP2Right = 1;
var sInitClick = "";
var isPlayer1First = true;

var sWinner = "";

var sPlayer1Name = "Player 1";
var sPlayer2Name = "Player 2";

var isFirstClick = true;
var isTurnP1 = true;

var iTime = 0;

function InitGame()
{
	//standaard is player 1 de eerste die mag beginnen -> zijn background wordt
	//Hier wordt de game klaargezet (beide beginnen met 1 vinger per hand)	
	
	$(stageRef.lookupSelector("p1Left")).css('background-image', 'url(images/p1left-1.png)');	
	$(stageRef.lookupSelector("p1Right")).css('background-image', 'url(images/p1right-1.png)');	
	$(stageRef.lookupSelector("p2Left")).css('background-image', 'url(images/p2left-1.png)');	
	$(stageRef.lookupSelector("p2Right")).css('background-image', 'url(images/p2right-1.png)');
	
	checkWhoPlays();
	changeColor();
}

function newGame()
{	
	$(stageRef.lookupSelector("lblP2")).show();
	$(stageRef.lookupSelector("lblP1")).show();
	if(inputNameP1.attr("value") == "")
	{
		sPlayer1Name = "Speler 1";
	}
	else
	{
		sPlayer1Name = inputNameP1.attr("value");
	}
	if(inputNameP2.attr("value") == "")
	{
		sPlayer2Name = "Speler 2";
	}
	else
	{
		sPlayer2Name = inputNameP2.attr("value");
	}
	//resetGame();
	$(stageRef.lookupSelector("animation")).show();
	$(stageRef.lookupSelector("EndGame")).css('visibility','hidden');	
}

function resetGame()
{	
	iP1Left = 1;
	iP1Right = 1;
	iP2Left = 1;
	iP2Right = 1;
	sInitClick = "";
	if(sWinner == "player1")
	{
		isPlayer1First = false;
		isTurnP1 = false;
	}
	if(sWinner == "player2")
	{
		isPlayer1First = true;
		isTurnP1 = true;
	}
	
	sWinner = "";
	
	isFirstClick = true;
	
	iTime = 0;
	
	InitGame();
	stageRef.$("EndGame").css('visibility','hidden');	
	startTimer();
}

function checkWhoPlays()
{
	if(isTurnP1 == true)
	{
		$(stageRef.lookupSelector("txtPlayer1")).html("Jouw beurt");
		$(stageRef.lookupSelector("txtPlayer2")).html(sPlayer2Name);
		
	}
	else if(isTurnP1 == false)
	{
		$(stageRef.lookupSelector("txtPlayer2")).html("Jouw beurt");
		$(stageRef.lookupSelector("txtPlayer1")).html(sPlayer1Name);
	}
}
function mouseOverSymbol(sSymbol, sItem)
{
	var ref = stageRef.getSymbol(sSymbol);
	$(ref.lookupSelector(sItem)).css('cursor','pointer');
}

function mouseOverItem(sItem)
{
	$(stageRef.lookupSelector(sItem)).css('cursor','pointer');
}

function GameLogic(iValue)
{	
	if(iValue > 0)
	{
		if(sInitClick == "p1Left")
		{
			iValue += iP1Left;		
		}		
		else if (sInitClick == "p1Right")
		{
			iValue += iP1Right;
		}
		else if (sInitClick == "p2Left")
		{
			iValue += iP2Left;
		}
		else if (sInitClick == "p2Right")
		{
			iValue += iP2Right;
		}	
	}
	return iValue;
}

function SplitPoints(iLeft,iRight)
{
	var sum = iLeft + iRight;

	iLeft = sum/2;
	
	return iLeft;
}

function playInitSound()
{
	var sound = new Audio();
	sound.src = "sounds/initClick.mp3";
	sound.play();
}

function playSecondSound()
{
	var sound = new Audio();
	sound.src = "sounds/secondClick.mp3";
	sound.play();
}

function playBeginSound()
{	
	var sound = new Audio();
	sound.src = "sounds/start.mp3";
	sound.play();
}

function playEndSound()
{
	var sound = new Audio();
	sound.src = "sounds/end.mp3";
	sound.play();
}

function checkScore()
{
	if(iP1Left == 0 && iP1Right == 0)
	{
		console.log("game over voor player 1");
		sWinner = "player2";
		stopGame();
		playEndSound();		
	}
	if(iP2Left == 0 && iP2Right == 0)
	{
		console.log("game over voor player 2");
		sWinner = "player1";
		stopGame();
		playEndSound();		
	}
}

function startTimer()
{
	timer = setInterval(function(){iTime +=1;},100);
}

function stopGame()
{	
	clearInterval(timer);
	stageRef.$("EndGame").css('visibility','visible');	
	var end = stageRef.getSymbol("EndGame");
	$(end.lookupSelector("txtAgain")).css('cursor','pointer');		
	if(sWinner == "player1")
	{
		console.log("player 1 wins");
		sWinner = sPlayer1Name;
		$(end.lookupSelector("txtEndGameP1")).html("You won");
		$(end.lookupSelector("txtEndGameP2")).html("You lost");
	}
	if(sWinner == "player2")
	{
		sWinner = sPlayer2Name;
		console.log("player 2 wins");
		$(end.lookupSelector("txtEndGameP1")).html("You lost");
		$(end.lookupSelector("txtEndGameP2")).html("You won");
	}
	
	iTime = iTime/10;
	console.log(iTime);
	//pushes score to DB
	$.get("php/addscore.php?highscore_name="+sPlayer1Name+" vs. "+sPlayer2Name+"&highscore_winner="+sWinner+"&highscore_score="+iTime); ;
}

function getData()
{
	console.log("get Data");
	$.getJSON('php/highscore.php', function(data)
	{
		arrScores = data;
		highsore();
	});
	
}

function highsore()
{	
	console.log(arrScores);	
	var high = stageRef.getSymbol("highscore");
	var ii = 1;
	for(var i = 0; i < arrScores.length; i++)
	{
		var name = arrScores[i]["highscores_winner"];
		var score = arrScores[i]["highscores_score"];
		console.log("txt"+ii);
		$(high.lookupSelector("txt"+ii)).html(ii+". "+name+": " + score + '"');
		ii+=1;
	}
}

function changeColor()
{
	if(isTurnP1 == true)
	{
		$(stageRef.lookupSelector("p1Left")).css('background-color', '#cc0000');	
		$(stageRef.lookupSelector("p1Right")).css('background-color', '#cc0000');	
		$(stageRef.lookupSelector("p2Left")).css('background-color', '#ffbb33');	
		$(stageRef.lookupSelector("p2Right")).css('background-color', '#ffbb33');	
	}
	else if(isTurnP1 == false)
	{
		$(stageRef.lookupSelector("p1Left")).css('background-color', '#ff4444');	
		$(stageRef.lookupSelector("p1Right")).css('background-color', '#ff4444');	
		$(stageRef.lookupSelector("p2Left")).css('background-color', '#ff8800');	
		$(stageRef.lookupSelector("p2Right")).css('background-color', '#ff8800');	
	}
}

/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //Stage Creation Complete
         stageRef = sym;
         stageRef.$("EndGame").css('visibility','hidden');
         stageRef.$("highscore").css('visibility','hidden');
         stageRef.$("uitleg").css('visibility','hidden');
         var nameP1 = sym.$("lblP1");
         nameP1.html("Speler 1: ");
         inputNameP1 = $('<input />').attr({'type':'text', 'value':'', 'id':'nameP1'});
         inputNameP1.css('height', 30);
         inputNameP1.css('font-size', 25);
         inputNameP1.css('width', 200);
         inputNameP1.appendTo(nameP1);
         
         var nameP2 = sym.$("lblP2");
         nameP2.html("Speler 2: ");
         inputNameP2 = $('<input />').attr({'type':'text', 'value':'', 'id':'nameP2'});
         inputNameP2.css('height', 30);
         inputNameP2.css('font-size', 25);
         inputNameP2.css('width', 200);
         inputNameP2.appendTo(nameP2);
         
         InitGame();

      });
      //Edge binding end
      
      

      Symbol.bindElementAction(compId, symbolName, "${_p1Right}", "click", function(sym, e) {
         // insert code for mouse click here
         if(isTurnP1 == true)
         {
          	if(isFirstClick == true)
            {
            	playInitSound();
            	$(stageRef.lookupSelector("p1Right")).css('background-color', '#ff4444');
            	$(stageRef.lookupSelector("p2Left")).css('background-color', '#ff8800');	
         		$(stageRef.lookupSelector("p2Right")).css('background-color', '#ff8800');	
            	isFirstClick = false;
         		sInitClick = "p1Right";
            }
         }   
         if(sInitClick != "p1Right" && isFirstClick == false)
         {
         	playSecondSound();
         	if(sInitClick == "p1Left")
         	{
         		//split de punten over beide handen
         		var sum = iP1Left + iP1Right;
         		if(sum%2 == 0)
         		{
         			iP1Left = SplitPoints(iP1Left, iP1Right);
         			iP1Right = iP1Left;
         		}	
         		else
         		{
         			console.log("oneven");
         			iP1Left += 1;
         			iP1Right = SplitPoints(iP1Left, iP1Right);
         			iP1Left = iP1Right-1;
         			console.log(iP1Left);
         			console.log(iP1Right);
         		}
         		$(stageRef.lookupSelector("p1Left")).css('background-image', 'url(images/p1left-'+iP1Left+'.png)');	
         		isTurnP1 = false;
         	}
         	else
         	{
         		iP1Right = GameLogic(iP1Right);
         		isTurnP1 = true;
         	}
         	if(iP1Right >4)
         	{
         		iP1Right = 0;
         	}
         	$(stageRef.lookupSelector("p1Right")).css('background-image', 'url(images/p1right-'+iP1Right+'.png)');
         	isFirstClick = true;	
         	checkWhoPlays();
         	changeColor();
         	checkScore();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2Right}", "click", function(sym, e) {
         // insert code for mouse click here
         if(isTurnP1 == false)
         {
         	if(isFirstClick == true)
            {
            	playInitSound();
            	$(stageRef.lookupSelector("p2Right")).css('background-color', '#ffbb33');
            	$(stageRef.lookupSelector("p1Left")).css('background-color', '#cc0000');	
         		$(stageRef.lookupSelector("p1Right")).css('background-color', '#cc0000');
            	isFirstClick = false;
         		sInitClick = "p2Right";
            }
         }
         if(sInitClick != "p2Right" && isFirstClick == false)
         {
         	playSecondSound();
         	if(sInitClick == "p2Left")
         	{
         		//split de punten over beide handen
         		var sum = iP2Left + iP2Right;
         		if(sum%2 == 0)
         		{
         			iP2Left = SplitPoints(iP2Left, iP2Right);
         			iP2Right = iP2Left;
         		}	
         		else
         		{
         			iP2Left += 1;
         			iP2Right = SplitPoints(iP2Left, iP2Right);
         			iP2Left = iP2Right-1;
         		}
         		$(stageRef.lookupSelector("p2Left")).css('background-image', 'url(images/p2left-'+iP2Left+'.png)');	
         		isTurnP1 = true;
         	}
         	else
         	{
         		iP2Right = GameLogic(iP2Right);
         		isTurnP1 = false;
         	}   	
         	if(iP2Right >4)
         	{
         		iP2Right = 0;
         	}
         	$(stageRef.lookupSelector("p2Right")).css('background-image', 'url(images/p2right-'+iP2Right+'.png)');
         	isFirstClick = true;
         	
         	checkWhoPlays();
         	changeColor();
         	checkScore();
         }
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_p1Left}", "click", function(sym, e) {
         // insert code for mouse click here
         if(isTurnP1 == true)
         {
         	if(isFirstClick == true)
         	{
         		playInitSound();
         		$(stageRef.lookupSelector("p1Left")).css('background-color', '#ff4444');	
         		$(stageRef.lookupSelector("p2Left")).css('background-color', '#ff8800');	
         		$(stageRef.lookupSelector("p2Right")).css('background-color', '#ff8800');	
         		isFirstClick = false;
         		sInitClick = "p1Left";
         	}	
         }
         if(sInitClick != "p1Left" && isFirstClick == false)
         {	
         	playSecondSound();
         	if(sInitClick == "p1Right")
         	{	
         		var sum = iP1Left + iP1Right;
         		if(sum%2 == 0)
         		{
         			iP1Left = SplitPoints(iP1Left, iP1Right);
         			iP1Right = iP1Left;
         		}	
         		else
         		{
         			iP1Right += 1;
         			iP1Left = SplitPoints(iP1Left, iP1Right);
         			iP1Right = iP1Left-1;
         		}
         		$(stageRef.lookupSelector("p1Right")).css('background-image', 'url(images/p1right-'+iP1Right+'.png)');
         		isTurnP1 = false;
         	}
         
         	else
         	{
         		iP1Left = GameLogic(iP1Left);
         		isTurnP1 = true;
         	}
         
         	if(iP1Left >4)
         	{
         		iP1Left = 0;
         	}
         	$(stageRef.lookupSelector("p1Left")).css('background-image', 'url(images/p1left-'+iP1Left+'.png)');		
         	isFirstClick = true;	
         	checkWhoPlays();
         	changeColor();
         	checkScore();
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2Left}", "click", function(sym, e) {
         // insert code for mouse click here
         if(isTurnP1 == false)
         {
         	if(isFirstClick == true)
            {
            	playInitSound();
            	$(stageRef.lookupSelector("p2Left")).css('background-color', '#ffbb33');
            	$(stageRef.lookupSelector("p1Left")).css('background-color', '#cc0000');	
         		$(stageRef.lookupSelector("p1Right")).css('background-color', '#cc0000');
            	isFirstClick = false;
         		sInitClick = "p2Left";
            }
         }
         if(sInitClick != "p2Left" && isFirstClick == false)
         {
         	playSecondSound();
         	if(sInitClick == "p2Right")
         	{	
         		var sum = iP2Left + iP2Right;
         		if(sum%2 == 0)
         		{
         			iP2Left = SplitPoints(iP2Left, iP2Right);
         			iP2Right = iP2Left;
         		}	
         		else
         		{
         			iP2Right += 1;
         			iP2Left = SplitPoints(iP2Left, iP2Right);
         			iP2Right = iP2Left-1;
         		}
         		$(stageRef.lookupSelector("p2Right")).css('background-image', 'url(images/p2right-'+iP2Right+'.png)');
         		isTurnP1 = true;				
         	}
         
         	else
         	{
         		iP2Left = GameLogic(iP2Left);
         		isTurnP1 = false;
         	}
         
         	if(iP2Left >4)
         	{
         		iP2Left = 0;
         	}
         	$(stageRef.lookupSelector("p2Left")).css('background-image', 'url(images/p2left-'+iP2Left+'.png)');
         	isFirstClick = true;   	 	
         	checkWhoPlays();
         	changeColor();
         	checkScore();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p1Left}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         console.log("p1 mouse over");
         mouseOverItem("p1Left");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p1Right}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverItem("p1Right");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2Right}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverItem("p2Right");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_p2Left}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverItem("p2Left");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'animation'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_playButton}", "click", function(sym, e) {
         // insert code for mouse click here
         if(inputNameP1.attr("value") == "")
         {
         	sPlayer1Name = "Speler 1";
         }
         else
         {
         	sPlayer1Name = inputNameP1.attr("value");
         }
         if(inputNameP2.attr("value") == "")
         {
         	sPlayer2Name = "Speler 2";
         }
         else
         {
         	sPlayer2Name = inputNameP2.attr("value");
         }
         $(stageRef.lookupSelector("lblP2")).hide();
         $(stageRef.lookupSelector("lblP1")).hide();
         
         //stageRef.$("animation").delay(100).animate({opacity:0},200,"swing",function(){$(stageRef.lookupSelector("animation")).hide()});
         $(stageRef.lookupSelector("animation")).fadeOut( 300, "linear");
         
         $(stageRef.lookupSelector("txtPlayer1")).html(sPlayer1Name);
         $(stageRef.lookupSelector("txtPlayer2")).html(sPlayer2Name);
         resetGame();
         checkWhoPlays();
         startTimer();
         
         
         

      });
      //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         symbolRef = sym;
         playBeginSound();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_playButton}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         //pointer aanpassen lukt nog niet
         // sym.$("name") resolves an Edge Animate element name to a DOM
         // element that can be used with jQuery
         var element = stageRef.$("playButton");
         
         mouseOverSymbol("animation", "playButton");
         
         //$(stageRef.lookupSelector("button")).css('cursor','pointer');	
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnHigh}", "click", function(sym, e) {
         // insert code for mouse click here
         //open de highscore
         stageRef.$("highscore").css('visibility','visible');
         getData();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnHigh}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverSymbol("animation", "btnHigh");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnUitleg}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("klik op uitleg");
         $(stageRef.lookupSelector("uitleg")).css('visibility','visible');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnUitleg}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverSymbol("animation","btnUitleg");

      });
      //Edge binding end

   })("animation");
   //Edge symbol end:'animation'

   //=========================================================
   
   //Edge symbol: 'glowLoading'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

   })("glowLoading");
   //Edge symbol end:'glowLoading'

   //=========================================================
   
   //Edge symbol: 'EndGame'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_txtAgain}", "click", function(sym, e) {
         // insert code for mouse click here
         console.log("je speelt opnieuw");
         resetGame();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         endGameRef = sym;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnHigh}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverSymbol("EndGame", "btnHigh");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnHigh}", "click", function(sym, e) {
         // insert code for mouse click here
         stageRef.$("highscore").css('visibility','visible');
         getData();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtNew}", "click", function(sym, e) {
         // insert code for mouse click here
         newGame();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnNew}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverSymbol("EndGame", "btnNew");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtNew}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverSymbol("EndGame", "txtNew");

      });
      //Edge binding end

   })("EndGame");
   //Edge symbol end:'EndGame'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'highscore'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btnBack}", "click", function(sym, e) {
         // insert code for mouse click here
         stageRef.$("highscore").css('visibility','hidden');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnBack}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverSymbol("highscore", "btnBack");

      });
      //Edge binding end

   })("highscore");
   //Edge symbol end:'highscore'

   //=========================================================
   
   //Edge symbol: 'uitleg'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btnNext}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         
         if(iStap == 0)
         {
         	// play the timeline from the given position (ms or label)
         	sym.play(0);
         	
         	iStap +=1;
         }
         else if(iStap == 1)
         {
         	uitlegRef.play(500);
         
         	iStap +=1;
         }
         else if(iStap == 2)
         {
         	uitlegRef.play(1000);
         
         	iStap +=1;
         }
         else if(iStap == 3)
         {
         	uitlegRef.play(1500);
         
         	iStap +=1;
         }
         else if(iStap == 4)
         {
         	uitlegRef.play(2000);
         
         	iStap +=1;
         }
         else if(iStap == 5)
         {
         	uitlegRef.play(2500);
         
         	iStap +=1;
         }
         else if(iStap == 6)
         {
         	$(stageRef.lookupSelector("uitleg")).css('visibility','hidden');
         }

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         uitlegRef = sym;
         $(uitlegRef.lookupSelector("btnNext")).css('background-image', 'url(images/arrow-left-small.png)');

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnNext}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         mouseOverSymbol("uitleg","btnNext");

      });
      //Edge binding end

   })("uitleg");
   //Edge symbol end:'uitleg'

})(jQuery, AdobeEdge, "EDGE-423933296");