/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primarycolor : '#010a5e',
        primaryColorLight : '#010d78',
        secondarycolor : '#FFCC00',
        paragraphColor : '#c0c0c0',
        whitecolor : '#fff',
        blackcolor : '#000',
        greencolor : '#007936',
        redcolor : '#cc3433',
        darkcolor : '#000',
        darkColorLight : '#171717'
      },
      keyframes: {
        move: {
          "50%" : {transform : 'translateY(-1rem)'}
        },
        UD: {
          "0%" : {mt : "20px" , opacity : "0"},
          "50%" : {mt : "10px" , opacity : "0.4"},
          "100%" : {mt : "0px" , opacity : "1"}
        }
      }
      ,
      animation: {
        "movingY" : "move 2s linear infinite",
        "upDown" : "UD 2s linear"
      }
    },
    container : {
      center : true,
      padding : {
        DEFAULT : '1rem',
        sm : '1.5rem'
      }
    },
    fontFamily : {
      oswald : ['Oswald' , 'sans-serif'],
      dmsans : ['DM Sans' , 'sana-serif']
    }
  },
  plugins: [],
}

