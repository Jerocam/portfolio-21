import {imgPrCollege, imgPrCollScreen, imgPrEti, imgPrEtiScreen, imgPrReact, imgPrRtScreen, imgPrMernScreen,
  imgPrPizza, imgPrPizzaScreen, imgPrStarg, imgPrUnder, imgPrJerocam, imgPrJerocam2, imgPrJerocam3, 
  imgPrJerocam4, imgPrThumb1, imgPrThumb2, imgPrThumb3, imgPrThumb4 } from '../assets/images/exportImg.js';  

const pls = ["HTML5", "CSS3", "PHP", "Bootstrap", 
"JavaScript", "React", "Sass", "jQuery", "Angular", "Npmjs.com", 
"React Router Dom", "MDBootstrap", "MySQL", "MongoDB", "Heroku", "Express", "Node.js"];

export const projects =[
  { id:1, 
    name:'CollegeStuff', 
    image:imgPrCollege,
    imageScreen: imgPrCollScreen,
    link:"http://collegestuff.jerocam.com/",
    gitLink: "https://github.com/Jerocam/College-Stuff",
    techused:[
      {id:1, prog:pls[0]}, 
      {id:2, prog:pls[1]},
      {id:3, prog:pls[2]},
      {id:4, prog:pls[3]},
      {id:5, prog:pls[4]},
      {id:6, prog:pls[7]},
      {id:7, prog:pls[12]}
    ] 
  },
  { id:2, 
    name:'ETI', 
    image:imgPrEti,
    imageScreen: imgPrEtiScreen,
    link:"https://jerocam.github.io/eti-jerocam/",  
    gitLink: "https://github.com/Jerocam/eti-jerocam",
    techused:[
      {id:1, prog:pls[0]}, 
      {id:2, prog:pls[1]},
      {id:3, prog:pls[11]},
      {id:4, prog:pls[3]},
      {id:5, prog:pls[4]},
      {id:6, prog:pls[7]}
    ]
  },
  { id:3, 
    name:'Pizza Jerocam', 
    image:imgPrPizza,
    imageScreen: imgPrPizzaScreen, 
    link:"https://jerocam.github.io/pizza-jerocam/", 
    gitLink: "https://github.com/Jerocam/pizza-jerocam",
    techused:[
      {id:1, prog:pls[0]}, 
      {id:2, prog:pls[1]},
      {id:3, prog:pls[11]},
      {id:4, prog:pls[3]},
      {id:5, prog:pls[4]},
      {id:6, prog:pls[7]}
    ]
  },
  { id:4, 
    name:'Jerocam React Projects', 
    image:imgPrReact, 
    imageScreen: imgPrRtScreen,
    link:"https://jerocam.github.io/jerocamReact/#/", 
    gitLink: "https://github.com/Jerocam/jerocamReact",
    techused:[
      {id:1, prog:pls[0]}, 
      {id:2, prog:pls[1]},
      {id:3, prog:pls[5]},
      {id:4, prog:pls[3]},
      {id:5, prog:pls[4]},
      {id:6, prog:pls[10]},
      {id:7, prog:pls[12]},
      {id:8, prog:pls[9]},
    ]
  },
  { id:5, 
    name:'First MERN app', 
    image:imgPrJerocam4, 
    imageScreen: imgPrMernScreen,
    link:"https://secure-dusk-55794.herokuapp.com/", 
    gitLink: "https://github.com/Jerocam/first-mern",
    techused:[
      {id:1, prog:pls[0]}, 
      {id:2, prog:pls[1]},
      {id:3, prog:pls[5]},
      {id:4, prog:pls[13]},
      {id:5, prog:pls[14]},
      {id:6, prog:pls[10]},
      {id:7, prog:pls[15]},
      {id:8, prog:pls[16]},
    ]
  },
  { id:6, 
    name:'Under Construction', 
    image:imgPrUnder, 
    imageScreen: imgPrUnder,
    link:"", 
    gitLink: "",
    techused:[
      {id:1, prog:pls[0]}, 
      {id:2, prog:pls[1]},
      {id:3, prog:pls[5]},
      {id:4, prog:pls[13]},
      {id:5, prog:pls[14]},
      {id:6, prog:pls[10]},
      {id:7, prog:pls[15]},
      {id:8, prog:pls[16]},
    ]
  }
];

export const imgDG =[
  {
    src: imgPrStarg,
    thumbnail:imgPrThumb1,
    caption: 'Fan Stargate movie design'
  },
  {
    src: imgPrJerocam,
    thumbnail:imgPrThumb2,
    caption: 'Deafestival los angeles project'
  },
  {
    src: imgPrJerocam2,
    thumbnail:imgPrThumb3,
    caption: 'jerocam poster design'
  },
  {
    src: imgPrJerocam3,
    thumbnail:imgPrThumb4,
    caption: 'deafnight event design'
  }
];

export const options = {
  settings: {
    disableWheelControls: true,
  },
  caption: {
    captionColor: '#FFFFFF',
    captionFontSize: "1.5em",
    showCaption:true,
    captionFontFamily: "Bebas Neue, cursive"
  },
  thumbnails: {
    showThumbnails: false
  },
  buttons: {
    showDownloadButton: false,
    showAutoplayButton: false,
    size: '50px'
  }
}
