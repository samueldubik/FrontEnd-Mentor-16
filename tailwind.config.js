module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors:{
      'red'       : '#ff525d',
      'light-red' : '#ff7a85',
      'blue'      : '#1f3f5b',
      'white'     : '#ffffff',
      'gray'      : '#c8c8cb',
      'dark'      : '#4b5862',
      'darker'    : '#25252d',

      'grad-a1'   : '#ff8f70',
      'grad-a2'   : '#ff3d54',

      'grad-b1'   : '#2c2d3f',
      'grad-b2'   : '#3f4164',
    },

    fontFamily: {
      'overpass' : ['Overpass'],
      'ubuntu'   : ['Ubuntu'],
    }
  },
  plugins: [],
}
