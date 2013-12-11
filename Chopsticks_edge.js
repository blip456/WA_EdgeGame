/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['vibur, cursive']='<script src=\"http://use.edgefonts.net/vibur:n4:all.js\"></script>';
   fonts['merienda-one, cursive']='<script src=\"http://use.edgefonts.net/merienda-one:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'recPlayer1',
            type:'rect',
            rect:['0px','700px','400px','100px','auto','auto'],
            fill:["rgba(255,68,68,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'recPlayer2',
            type:'rect',
            rect:['0px','0px','400px','100px','auto','auto'],
            fill:["rgba(255,187,51,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'txtPlayer2',
            type:'text',
            rect:['0px','20px','400px','auto','auto','auto'],
            text:"Player 2",
            align:"center",
            font:['Verdana, Geneva, sans-serif',50,"rgba(255,255,255,1.00)","normal","none",""],
            transform:[[],['180']]
         },
         {
            id:'txtPlayer1',
            type:'text',
            rect:['0px','720px','400px','auto','auto','auto'],
            text:"Player 1",
            align:"center",
            font:['Verdana, Geneva, sans-serif',50,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'recCenter',
            type:'rect',
            rect:['0px','395px','400px','10px','auto','auto'],
            fill:["rgba(153,204,0,1)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'p1Left',
            type:'rect',
            rect:['20px','425px','170px','255px','auto','auto'],
            fill:["rgba(204,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'p1Right',
            type:'rect',
            rect:['210px','425px','170px','255px','auto','auto'],
            fill:["rgba(204,0,0,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'p2Right',
            type:'rect',
            rect:['20px','120px','170px','255px','auto','auto'],
            fill:["rgba(255,187,51,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'p2Left',
            type:'rect',
            rect:['210px','120px','170px','255px','auto','auto'],
            fill:["rgba(255,187,51,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'animation',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'EndGame',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'highscore',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'uitleg',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'lblP1',
            display:'none',
            type:'text',
            rect:['60px','202px','94px','46px','auto','auto'],
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'lblP2',
            display:'none',
            type:'text',
            rect:['60px','202px','94px','46px','auto','auto'],
            align:"center",
            font:['\'Trebuchet MS\', Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'highscore',
            symbolName:'highscore'
         },
         {
            id:'uitleg',
            symbolName:'uitleg'
         },
         {
            id:'EndGame',
            symbolName:'EndGame'
         },
         {
            id:'animation',
            symbolName:'animation'
         }
         ]
      },
   states: {
      "Base State": {
         "${_recPlayer1}": [
            ["style", "top", '700px'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_p1Left}": [
            ["style", "top", '425px'],
            ["style", "height", '255px'],
            ["color", "background-color", 'rgba(204,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '170px']
         ],
         "${_p2Left}": [
            ["style", "top", '120px'],
            ["style", "height", '255px'],
            ["color", "background-color", 'rgba(255,187,51,1.00)'],
            ["style", "left", '210px'],
            ["style", "width", '170px']
         ],
         "${_recPlayer2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,187,51,1.00)']
         ],
         "${_p2Right}": [
            ["style", "top", '120px'],
            ["style", "height", '255px'],
            ["color", "background-color", 'rgba(255,187,51,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '170px']
         ],
         "${_lblP1}": [
            ["style", "top", '566px'],
            ["style", "display", 'none'],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_txtPlayer1}": [
            ["style", "top", '720px'],
            ["style", "width", '400px'],
            ["style", "text-align", 'center'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '50px']
         ],
         "${_lblP2}": [
            ["style", "top", '620px'],
            ["style", "display", 'none'],
            ["style", "height", '50px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(228,229,228,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '400px']
         ],
         "${_txtPlayer2}": [
            ["transform", "rotateZ", '180deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "left", '0px'],
            ["style", "font-size", '50px'],
            ["style", "top", '20px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '400px']
         ],
         "${_p1Right}": [
            ["style", "top", '425px'],
            ["style", "height", '255px'],
            ["color", "background-color", 'rgba(204,0,0,1.00)'],
            ["style", "left", '210px'],
            ["style", "width", '170px']
         ],
         "${_recCenter}": [
            ["color", "background-color", 'rgba(153,204,0,1.00)'],
            ["style", "height", '10px'],
            ["style", "top", '395px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         labels: {
            "e": 0
         },
         timeline: [
            { id: "eid20", tween: [ "style", "${_lblP1}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid135", tween: [ "style", "${_lblP2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }         ]
      }
   }
},
"animation": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','400px','800px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['97px','576px','232px','224px','auto','auto'],
      type: 'rect',
      id: 'loader',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(102,153,0,1.00)']
   },
   {
      id: 'splashscreen2',
      type: 'image',
      rect: ['0px','0px','400px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/splashscreen.png','0px','0px']
   },
   {
      rect: ['0px','120px','400px','114px','auto','auto'],
      font: ['merienda-one, cursive',65,'rgba(255,255,255,1.00)','normal','none',''],
      align: 'center',
      id: 'Chopsticks',
      opacity: 1,
      text: 'Chopsticks',
      type: 'text'
   },
   {
      id: 'glowLoading',
      type: 'rect',
      rect: ['0','560','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      rect: ['20px','120px','360px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,1.00)',0,0,0],
      id: 'button',
      stroke: [0,'rgb(0, 0, 0)','none'],
      display: 'none',
      fill: ['rgba(102,153,0,1)']
   },
   {
      type: 'text',
      id: 'playButton',
      opacity: 1,
      rect: ['0px','120px','400px','100px','auto','auto'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,1.00)',2,2,0],
      display: 'none',
      font: ['merienda-one, cursive',65,'rgba(255,255,255,1.00)','normal','none',''],
      align: 'center',
      text: 'Play'
   },
   {
      rect: ['0px','600px','400px','60px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',35,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'center',
      id: 'btnHigh',
      text: 'Highscores',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['0px','750px','400px','25px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',25,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'center',
      id: 'btnUitleg',
      text: 'Uitleg',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'glowLoading',
      symbolName: 'glowLoading'
   }   ]
   },
   states: {
      "Base State": {
         "${_playButton}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["subproperty", "filter.drop-shadow.blur", '0px'],
            ["style", "font-size", '65px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '1'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["style", "top", '95px'],
            ["style", "font-family", 'merienda-one, cursive'],
            ["style", "text-align", 'center'],
            ["style", "height", '100px'],
            ["style", "display", 'none'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "width", '400px'],
            ["style", "left", '0px']
         ],
         "${_splashscreen2}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btnUitleg}": [
            ["style", "top", '750px'],
            ["style", "width", '400px'],
            ["style", "left", '0px'],
            ["style", "height", '25px'],
            ["style", "display", 'none'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '25px']
         ],
         "${_btnHigh}": [
            ["style", "top", '675px'],
            ["style", "font-size", '35px'],
            ["style", "text-decoration", 'none'],
            ["style", "display", 'none'],
            ["style", "height", '60px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${symbolSelector}": [
            ["style", "height", '800px'],
            ["style", "width", '400px']
         ],
         "${_loader}": [
            ["style", "top", '586px'],
            ["style", "display", 'none'],
            ["style", "height", '26px'],
            ["style", "left", '97px'],
            ["color", "background-color", 'rgba(102,153,0,1.00)']
         ],
         "${_Chopsticks}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '65px'],
            ["style", "top", '120px'],
            ["style", "text-align", 'center'],
            ["style", "height", '100px'],
            ["style", "font-family", 'merienda-one, cursive'],
            ["style", "width", '400px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '800px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_button}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '360px'],
            ["style", "top", '95px'],
            ["subproperty", "filter.drop-shadow.offsetV", '0px'],
            ["subproperty", "filter.drop-shadow.offsetH", '0px'],
            ["style", "height", '100px'],
            ["subproperty", "filter.blur", '0px'],
            ["subproperty", "filter.invert", '0'],
            ["style", "display", 'none']
         ],
         "${_glowLoading}": [
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid50", tween: [ "style", "${_btnHigh}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid15", tween: [ "style", "${_playButton}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid4", tween: [ "style", "${_loader}", "top", '248px', { fromValue: '586px'}], position: 0, duration: 3000, easing: "swing" },
            { id: "eid122", tween: [ "style", "${_btnUitleg}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid6", tween: [ "style", "${_loader}", "height", '312px', { fromValue: '26px'}], position: 0, duration: 3000, easing: "swing" },
            { id: "eid19", tween: [ "style", "${_loader}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0, easing: "swing" },
            { id: "eid44", tween: [ "style", "${_glowLoading}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid14", tween: [ "style", "${_button}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid10", tween: [ "style", "${_Chopsticks}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
            { id: "eid12", tween: [ "style", "${_Chopsticks}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "swing" }         ]
      }
   }
},
"glowLoading": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',25,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text',
      id: 'loading',
      text: 'Loading',
      align: 'center',
      rect: ['0px','0px','400px','40px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '40px'],
            ["style", "width", '400px']
         ],
         "${_loading}": [
            ["style", "top", '0px'],
            ["style", "font-size", '25px'],
            ["style", "height", '40px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "display", 'block'],
            ["style", "opacity", '0.25'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid41", tween: [ "style", "${_loading}", "opacity", '1', { fromValue: '0.25'}], position: 0, duration: 500, easing: "swing" },
            { id: "eid43", tween: [ "style", "${_loading}", "opacity", '0.25', { fromValue: '1'}], position: 500, duration: 500, easing: "swing" },
            { id: "eid18", tween: [ "style", "${_loading}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "swing" }         ]
      }
   }
},
"EndGame": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'recEndGame',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','400px','800px','auto','auto'],
      fill: ['rgba(153,204,0,1.00)']
   },
   {
      rect: ['0px','525px','400px','60px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'btnHigh',
      text: 'Highscores',
      align: 'center',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'recPlayer1Win',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','805px','400px','100px','auto','auto'],
      fill: ['rgba(255,68,68,1.00)']
   },
   {
      rect: ['0px','820px','400px','60px','auto','auto'],
      font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',60,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txtEndGameP1',
      text: 'You WIN!',
      align: 'center',
      type: 'text'
   },
   {
      transform: [[0,0],['180']],
      rect: ['0px','0px','400px','100px','auto','auto'],
      id: 'recPlayer2Win',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,187,51,1.00)']
   },
   {
      transform: [[0,0],['180']],
      type: 'text',
      align: 'center',
      id: 'txtEndGameP2',
      text: 'You WIN!',
      rect: ['0px','35px','400px','60px','auto','auto'],
      font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',60,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      rect: ['20px','230px','360px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'btnPlayAgain',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(102,153,0,1)']
   },
   {
      rect: ['26px','230px','360px','100px','auto','auto'],
      font: ['merienda-one, cursive',65,'rgba(255,255,255,1)','normal','none','normal'],
      filter: [0,0,1,0.2,0,0,0,0,'rgba(0,0,0,1.00)',2,2,0],
      id: 'txtAgain',
      text: 'Again?',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['20px','350px','360px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      id: 'btnNew',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(102,153,0,1)']
   },
   {
      rect: ['26px','350px','360px','100px','auto','auto'],
      font: ['merienda-one, cursive',65,'rgba(255,255,255,1)','normal','none','normal'],
      filter: [0,0,1,0.2,0,0,0,0,'rgba(0,0,0,1.00)',2,2,0],
      id: 'txtNew',
      text: 'New',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_txtNew}": [
            ["subproperty", "filter.drop-shadow.color", 'rgb(0,0,0)'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["style", "top", '350px'],
            ["subproperty", "filter.saturate", '0.2'],
            ["style", "height", '100px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "width", '360px'],
            ["style", "left", '26px']
         ],
         "${_recEndGame}": [
            ["color", "background-color", 'rgba(153,204,0,1.00)'],
            ["style", "height", '800px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btnPlayAgain}": [
            ["style", "top", '230px'],
            ["subproperty", "filter.grayscale", '0'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '20px'],
            ["style", "width", '360px']
         ],
         "${_btnNew}": [
            ["style", "top", '350px'],
            ["subproperty", "filter.grayscale", '0'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '20px'],
            ["style", "width", '360px']
         ],
         "${_recPlayer1Win}": [
            ["color", "background-color", 'rgba(255,68,68,1.00)'],
            ["style", "height", '100px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "top", '800px']
         ],
         "${_recPlayer2Win}": [
            ["color", "background-color", 'rgba(255,187,51,1.00)'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "top", '-100px']
         ],
         "${_btnHigh}": [
            ["style", "top", '525px'],
            ["style", "width", '400px'],
            ["style", "left", '0px'],
            ["style", "height", '60px'],
            ["style", "display", 'block'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '35px']
         ],
         "${_txtAgain}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["style", "top", '230px'],
            ["style", "left", '26px'],
            ["style", "height", '100px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "width", '360px'],
            ["subproperty", "filter.saturate", '0.2']
         ],
         "${symbolSelector}": [
            ["style", "height", '800px'],
            ["style", "width", '400px']
         ],
         "${_txtEndGameP1}": [
            ["style", "top", '820px'],
            ["style", "height", '60px'],
            ["style", "font-size", '60px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_txtEndGameP2}": [
            ["style", "top", '-80px'],
            ["style", "width", '400px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '60px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid87", tween: [ "style", "${_recPlayer2Win}", "top", '0px', { fromValue: '-100px'}], position: 0, duration: 750, easing: "easeInCubic" },
            { id: "eid84", tween: [ "style", "${_recPlayer1Win}", "top", '700px', { fromValue: '800px'}], position: 0, duration: 750, easing: "easeInCubic" },
            { id: "eid82", tween: [ "style", "${_txtEndGameP1}", "top", '720px', { fromValue: '820px'}], position: 0, duration: 750, easing: "easeInCubic" },
            { id: "eid88", tween: [ "style", "${_txtEndGameP2}", "top", '20px', { fromValue: '-80px'}], position: 0, duration: 750, easing: "easeInCubic" }         ]
      }
   }
},
"highscore": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','400px','800px','auto','auto'],
      id: 'recHighscoreBG',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['0px','70px','400px','100px','auto','auto'],
      font: ['merienda-one, cursive',65,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'txtHighscoreTitle',
      text: 'Highscore',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['50px','200px','300px','35px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txt1',
      text: '1',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['50px','275px','300px','35px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txt2',
      text: '2',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['50px','350px','300px','35px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txt3',
      text: '3',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['50px','425px','300px','35px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txt4',
      text: '4',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['50px','500px','300px','35px','auto','auto'],
      font: ['Trebuchet MS, Arial, Helvetica, sans-serif',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txt5',
      text: '5',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['20px','600px','360px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'btn',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(102,153,0,1.00)']
   },
   {
      rect: ['0px','600px','400px','100px','auto','auto'],
      font: ['merienda-one, cursive',65,'rgba(255,255,255,1)','normal','none','normal'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,1.00)',2,2,0],
      id: 'btnBack',
      text: 'Back',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btnBack}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '400px'],
            ["style", "top", '600px'],
            ["style", "text-align", 'center'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["style", "height", '100px'],
            ["style", "font-family", 'merienda-one, cursive'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["style", "font-size", '65px']
         ],
         "${_txt5}": [
            ["style", "top", '500px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '35px'],
            ["style", "height", '35px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '300px']
         ],
         "${_txt3}": [
            ["style", "top", '350px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '35px'],
            ["style", "height", '35px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '300px']
         ],
         "${_txt1}": [
            ["style", "top", '200px'],
            ["style", "text-align", 'left'],
            ["style", "width", '300px'],
            ["style", "height", '35px'],
            ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
            ["style", "left", '50px'],
            ["style", "font-size", '35px']
         ],
         "${_txt4}": [
            ["style", "top", '425px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '35px'],
            ["style", "height", '35px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '800px'],
            ["style", "width", '400px']
         ],
         "${_txt2}": [
            ["style", "top", '275px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '35px'],
            ["style", "height", '35px'],
            ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '300px']
         ],
         "${_recHighscoreBG}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(153,204,0,1.00)'],
            ["style", "height", '800px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_txtHighscoreTitle}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '400px'],
            ["style", "top", '70px'],
            ["style", "text-align", 'center'],
            ["style", "height", '100px'],
            ["style", "font-family", 'merienda-one, cursive'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '65px']
         ],
         "${_btn}": [
            ["color", "background-color", 'rgba(102,153,0,1.00)'],
            ["style", "height", '100px'],
            ["style", "top", '600px'],
            ["style", "left", '20px'],
            ["style", "width", '360px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid54", tween: [ "style", "${_recHighscoreBG}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid55", tween: [ "color", "${_recHighscoreBG}", "background-color", 'rgba(153,204,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(153,204,0,1.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"uitleg": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'step1',
      type: 'image',
      rect: ['0px','0px','400px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/step1.PNG','0px','0px']
   },
   {
      id: 'step2',
      type: 'image',
      rect: ['400px','0px','400px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/step2.PNG','0px','0px']
   },
   {
      id: 'step3',
      type: 'image',
      rect: ['800px','0px','400px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/step3.PNG','0px','0px']
   },
   {
      id: 'step4',
      type: 'image',
      rect: ['1200px','0px','400px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/step4.PNG','0px','0px']
   },
   {
      id: 'step5',
      type: 'image',
      rect: ['1600px','0px','400px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/step5.PNG','0px','0px']
   },
   {
      id: 'step6',
      type: 'image',
      rect: ['2000px','0px','400px','800px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/step6.PNG','0px','0px']
   },
   {
      type: 'rect',
      id: 'btnNext',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['300px','350px','100px','100px','auto','auto'],
      fill: ['rgba(0,0,0,0.40)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_step4}": [
            ["style", "left", '1200px'],
            ["style", "top", '0px']
         ],
         "${_btnNext}": [
            ["style", "top", '350px'],
            ["style", "height", '100px'],
            ["color", "background-color", 'rgba(0,0,0,0.40)'],
            ["style", "left", '300px'],
            ["style", "width", '100px']
         ],
         "${_step2}": [
            ["style", "left", '400px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '800px'],
            ["style", "width", '2400px']
         ],
         "${_step6}": [
            ["style", "left", '2000px'],
            ["style", "top", '0px']
         ],
         "${_step3}": [
            ["style", "left", '800px'],
            ["style", "top", '0px']
         ],
         "${_step5}": [
            ["style", "top", '0px'],
            ["style", "left", '1600px']
         ],
         "${_step1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: false,
         timeline: [
            { id: "eid116", tween: [ "style", "${_step6}", "left", '0px', { fromValue: '2000px'}], position: 0, duration: 2500 },
            { id: "eid117", tween: [ "style", "${_step5}", "left", '-400px', { fromValue: '1600px'}], position: 0, duration: 2500 },
            { id: "eid119", tween: [ "style", "${_step3}", "left", '-1200px', { fromValue: '800px'}], position: 0, duration: 2500 },
            { id: "eid121", tween: [ "style", "${_step1}", "left", '-2000px', { fromValue: '0px'}], position: 0, duration: 2500 },
            { id: "eid120", tween: [ "style", "${_step2}", "left", '-1600px', { fromValue: '400px'}], position: 0, duration: 2500 },
            { id: "eid118", tween: [ "style", "${_step4}", "left", '-800px', { fromValue: '1200px'}], position: 0, duration: 2500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-423933296");
