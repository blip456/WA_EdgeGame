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
         },
         {
            id:'EndGame',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         }],
         symbolInstances: [
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
         "${_Stage}": [
            ["color", "background-color", 'rgba(228,229,228,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
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
            ["style", "height", '50px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
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
         autoPlay: true,
         labels: {
            "e": 0
         },
         timeline: [
            { id: "eid20", tween: [ "style", "${_lblP1}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid32", tween: [ "style", "${_lblP2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" }         ]
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
            ["style", "top", '120px'],
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
         "${_button}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '360px'],
            ["style", "top", '120px'],
            ["subproperty", "filter.drop-shadow.offsetV", '0px'],
            ["subproperty", "filter.drop-shadow.offsetH", '0px'],
            ["style", "display", 'none'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '100px'],
            ["subproperty", "filter.invert", '0']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '800px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
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
            { id: "eid10", tween: [ "style", "${_Chopsticks}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "swing" },
            { id: "eid12", tween: [ "style", "${_Chopsticks}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 500, easing: "swing" },
            { id: "eid6", tween: [ "style", "${_loader}", "height", '312px', { fromValue: '26px'}], position: 0, duration: 3000, easing: "swing" },
            { id: "eid19", tween: [ "style", "${_loader}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0, easing: "swing" },
            { id: "eid16", tween: [ "style", "${_playButton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid15", tween: [ "style", "${_playButton}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid44", tween: [ "style", "${_glowLoading}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid17", tween: [ "style", "${_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid14", tween: [ "style", "${_button}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0, easing: "swing" },
            { id: "eid4", tween: [ "style", "${_loader}", "top", '248px', { fromValue: '586px'}], position: 0, duration: 3000, easing: "swing" }         ]
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
      rect: ['0px','0px','400px','800px','auto','auto'],
      id: 'recEndGame',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(153,204,0,1.00)']
   },
   {
      rect: ['0px','700px','400px','100px','auto','auto'],
      id: 'recPlayer1Win',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,68,68,1.00)']
   },
   {
      rect: ['0px','705px','400px','60px','auto','auto'],
      font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',60,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txtEndGameP1',
      text: 'You WIN!',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','0px','400px','100px','auto','auto'],
      transform: [[],['180']],
      id: 'recPlayer2Win',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,187,51,1.00)']
   },
   {
      rect: ['0px','35px','400px','60px','auto','auto'],
      transform: [[],['180']],
      font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif',60,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'txtEndGameP2',
      text: 'You WIN!',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['20px','350px','360px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'btnPlayAgain',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(102,153,0,1)']
   },
   {
      rect: ['26px','350px','360px','100px','auto','auto'],
      font: ['merienda-one, cursive',65,'rgba(255,255,255,1)','normal','none','normal'],
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,1.00)',2,2,0],
      id: 'txtAgain',
      text: 'Again?',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_recEndGame}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(153,204,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '800px']
         ],
         "${_btnPlayAgain}": [
            ["style", "top", '350px'],
            ["style", "left", '20px'],
            ["style", "width", '360px']
         ],
         "${_txtEndGameP1}": [
            ["style", "top", '705px'],
            ["style", "height", '60px'],
            ["style", "font-size", '60px'],
            ["style", "left", '0px'],
            ["style", "width", '400px']
         ],
         "${_recPlayer1Win}": [
            ["style", "top", '700px'],
            ["color", "background-color", 'rgba(255,68,68,1.00)'],
            ["style", "left", '0px'],
            ["style", "height", '100px']
         ],
         "${_recPlayer2Win}": [
            ["color", "background-color", 'rgba(255,187,51,1.00)'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '100px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '800px'],
            ["style", "width", '400px']
         ],
         "${_txtAgain}": [
            ["style", "top", '350px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["style", "height", '100px'],
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '26px'],
            ["style", "width", '360px']
         ],
         "${_txtEndGameP2}": [
            ["style", "top", '35px'],
            ["transform", "rotateZ", '180deg'],
            ["style", "height", '60px'],
            ["style", "width", '400px'],
            ["style", "left", '0px'],
            ["style", "font-size", '60px']
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
         ]
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
