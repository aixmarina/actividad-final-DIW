/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Helvetica'], 
        'header': ['Agbalumo'],
        'test': ['Inter','sans-serif']
      }, 
      colors: {
        'navy': '#3D30A2',
        'purple': '#B15EFF',
        'orange':'#FFA33C',
        'yellow': '#FFFB73',
        'greyish': '#F3F4EF',
        'greyish3': 'rgba(243, 244, 239, 0.9)',
        'greyish2':'#EAEDE6',
        'body':'#251D18',
        'body2':'#160E09',
        'simple':'#888888',
        'nav':'#666666',
        'hoverNav':'#160E09',
        'footer':'#E6E6E6'
      },
      boxShadow: {
        'card': '5px 5px 0px 1px #FFA33C'
      },
      animation: {
        movement: 'movement 10s linear infinite',
      },
      keyframes: {
        movement: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)'}
        }
      }
    }
  },
  plugins: [],
}