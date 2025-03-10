import type {Config} from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      yellow: '#fef8e1',
      transparent: 'transparent',
    },
    fontFamily: {
      dana: ['IRANSans'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      blur: {
        xs: '2px',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
      fontSize: {
        body1: [
          '.875rem',
          {
            fontWeight: '500',
          },
        ],
        body2: [
          '.875rem',
          {
            fontWeight: '400',
          },
        ],
        body3: [
          '.75rem',
          {
            fontWeight: '400',
          },
        ],
        body4: [
          '.625rem',
          {
            fontWeight: '400',
          },
        ],
        'title-xl': [
          '1.125rem',
          {
            fontWeight: '700',
          },
        ],
        'title-bold': [
          '.875rem',
          {
            fontWeight: '700',
          },
        ],
        'title-lg': [
          '1.125rem',
          {
            fontWeight: '500',
          },
        ],
        'title-md': [
          '1rem',
          {
            fontWeight: '600',
          },
        ],
        'title-sm': [
          '.875rem',
          {
            fontWeight: '600',
          },
        ],
        'title-xs': [
          '.75rem',
          {
            fontWeight: '600',
          },
        ],
        btn: [
          '1rem',
          {
            fontWeight: '400',
          },
        ],
        'btn-sm': [
          '.75rem',
          {
            fontWeight: '400',
          },
        ],
        tile: [
          '.812rem',
          {
            fontWeight: '500',
          },
        ],
        small: [
          '.5rem',
          {
            fontWeight: '500',
          },
        ],
        'sub-small': [
          '.625rem',
          {
            fontWeight: '500',
          },
        ],
        'sub-text': [
          '.75rem',
          {
            fontWeight: '500',
          },
        ],
        thin: [
          '.875rem',
          {
            fontWeight: '300',
          },
        ],
      },
      borderRadius: {
        default: '20px',
      },
      animation: {
        bullet: 'bullet .7s',
        'bullet-number': 'bulletNumber 0.3s',
        shake: 'shake .3s',
      },
      keyframes: {
        bullet: {
          '0%, 30%': {transform: 'scale(0)', opacity: '0'},
          '100%': {transform: 'scale(1.1)', opacity: '1'},
        },
        bulletNumber: {
          '0%': {
            transform: 'scale(1)',
            opacity: '0.8',
          },
          '20%': {
            transform: 'scale(1.5)',
            opacity: '1',
          },
          '60%': {
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0',
          },
        },
        shake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '20%': {
            transform: 'translateX(5px)',
          },
          '40%': {
            transform: 'translateX(-5px)',
          },
          '60%': {
            transform: 'translateX(5px)',
          },
          '80%': {
            transform: 'translateX(-5px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      screens: {
        'sm-height': {raw: '(max-height: 736px)'},
      },
    },
  },
  plugins: [],
};
export default config;
