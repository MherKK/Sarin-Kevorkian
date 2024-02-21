import { homeImage } from "./src/assets/pictures.js";

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme:{
      extend: {
        colors: {
          'black' : 'black',
          'gold' : 'rgb(255,215,0)',
          
        },
        backgroundImage: {
          'bg-image': `url(./src/assets/homephoto2.jpg)`,
          'bg-op-low':'rgba(76, 175, 80, 0.2)'
        },
        backgroundSize: {
          '150%':'150px,530px,20px'
        },
        backgroundPosition: {
          'bg-center-center':'right'
        }
      }
    },
    plugins:[]
}