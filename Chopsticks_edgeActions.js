var stageRef;	
var symbolRef;

var timer;

var iP1Left = 1;
var iP1Right = 1;
var iP2Left = 1;
var iP2Right = 1;
var sInitClick = "";
var isPlayer1First = true;

var sPlayer1Name = "Player 1";
var sPlayer2Name = "Player 2";

var isFirstClick = true;
var isTurnP1 = true;

var iTime = 0;

function InitGame()
{
	//standaard is player 1 de eerste die mag beginnen -> zijn background wordt
	//Hier wordt de game klaargezet (beide beginnen met 1 vinger per hand)	
	
	$(stageRef.lookupSelector("animation")).css('background-image', 'url(images/p1left-1.png)');	
	$(stageRef.lookupSelector("p1Left")).css('background-image', 'url(images/p1left-1.png)');	
	$(stageRef.lookupSelector("p1Right")).css('background-image', 'url(images/p1right-1.png)');	
	$(stageRef.lookupSelector("p2Left")).css('background-image', 'url(images/p2left-1.png)');	
	$(stageRef.lookupSelector("p2Right")).css('background-image', 'url(images/p2right-1.png)');
	
	checkWhoPlays();
	changeColor();
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
		stopGame();
		playEndSound();
	}
	if(iP2Left == 0 && iP2Right == 0)
	{
		console.log("game over voor player 2");
		stopGame();
		playEndSound();
	}
}

function startTimer()
{
	console.log("timer wordt gestart");
	timer = setInterval(function(){iTime +=1},100);
}

function stopGame()
{
	clearInterval(timer);
	console.log(iTime);
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
         
         var nameP1 = sym.$("lblP1")
         nameP1.html("Speler 1: ");
         inputNameP1 = $('<input />').attr({'type':'text', 'value':'', 'id':'nameP1'});
         inputNameP1.css('height', 30);
         inputNameP1.css('font-size', 25);
         inputNameP1.css('width', 200);
         inputNameP1.appendTo(nameP1);
         
         var nameP2 = sym.$("lblP2")
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
         $(stageRef.lookupSelector("lblP2")).remove();
         $(stageRef.lookupSelector("lblP1")).remove();
         stageRef.$("animation").delay(100).animate({opacity:0},200,"swing",function(){$(stageRef.lookupSelector("animation")).remove();});
         
         $(stageRef.lookupSelector("txtPlayer1")).html(sPlayer1Name);
         $(stageRef.lookupSelector("txtPlayer2")).html(sPlayer2Name);
         
         checkWhoPlays();
         startTimer();
         //nog een functie hebben die te timer start
         
         
         

      });
      //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         symbolRef = sym;
         //playBeginSound();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_playButton}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         //pointer aanpassen lukt nog niet
         $(stageRef.lookupSelector("playButton")).css('cursor','pointer');	

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
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

})(jQuery, AdobeEdge, "EDGE-423933296");