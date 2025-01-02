/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ["Poppins", 'sans-serif'],
        'Jost': ["Jost", 'sans-serif'],
      },
      colors: {
        "pritext": "#3F3D56",
        "hoverbackground": "#F05366",
        "hoverText": "#F05366", 
      },
      keyframes: {
        'text-pop-up-top': {
          '0%': {
            transform: 'translateY(0)',
            transformOrigin: '50% 50%',
            textShadow: 'none',
          },
          '100%': {
            transform: 'translateY(-50px)',
            transformOrigin: '50% 50%',
            textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)',
          },
        },
        typing: {
          "from": { width: "0%" },
          "to": { width: "100%" },
        },
      
        'pop-out': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'text-pop-up-top': 'text-pop-up-top 1s ease-in-out',
        typing: "typing 2s steps(40, end),  step-end 1000",
        "fade-in": "fadeIn 1s ease-in-out",
        "pop-out": 'pop-out 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
