const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'bg-color': '#0b0d0f',
      'font-color': '#E2E6E9',
      'fontcolor-2': '#98A8B3',
      'font-low-color': '#858f98',
      'font-victory': '#3399ff',
      'font-defeat': '#ff3363',
      vc: '#141f28',
      'panel-vc': '#112232',
      'vc-hov': '#1a3650',
      'panel-de': '#0b0d0f',
      de: '#23181d',
      'de-hov': '#4c1c2a',
      'logo-color': '#6560ff',
      'input-border': '#1a1f23',
      'input-bg': '#111517',
      'input-font': '#757575',
      'list-color': '#111517',
      'list-hover': '#1A1F23',
      'list-border': '#0b0d0f',
      'win-color': '#cb9516', //#3399ff
      'dialog-page-color': '#0b0d0f',
      C9: '#0093c9',
      CLG: '#00b5e2',
      IMT: '#03b1a9',
      TL: '#ffffff',
      FLY: '#02894b',
      EG: '#666666',
      GG: '#daad58',
      100: '#df3030',
      TSM: '#999999',
      DIG: '#ffcc00',
      black: '#000000',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
        'players-teams-list': '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      lineHeight: {
        56: '3.5rem',
        'team-player': '2.75rem',
        'player-list-lh': '4rem'
      },
      inset: {
        logo: '6.5rem'
      }
    }
  },
  plugins: []
}
