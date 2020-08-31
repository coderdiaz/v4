const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const mdx = require('@mdx-js/mdx');

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './src/components/**/*.{ts,tsx}',
      './src/pages/**/*.{ts,tsx,mdx}',
      './src/layouts/**/*.{ts,tsx}',
      'next.config.js',
    ],
    options: {
      extractors: [
        {
          extensions: ['mdx'],
          extractor: (content) => {
            content = mdx.sync(content)

            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []

            return broadMatches.concat(innerMatches)
          },
        },
      ],
      whitelist: ['dark-mode', 'bg-green-400', 'bg-alternative-400', 'bg-gray-400', 'h1', 'h2', 'h3', 'p', 'blockquote', 'strong'],
    },
  },
  theme: {
    darkSelector: '.dark-mode',
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      darken: '#16161A',
      primary: {
        100: '#F0BDCA',
        200: '#DA9BAB',
        300: '#DA718C',
        400: '#D85072',
        500: '#D4385F',
        600: '#CA2D54',
        700: '#D0244F',
        800: '#CC1543',
        900: '#B02649'
      },
      green: {
        100: '#42FFB1',
        200: '#3FF8AB',
        300: '#37EEA2',
        400: '#33CE8E',
        500: '#2CB67D',
        600: '#29AA75',
        700: '#259869',
        800: '#228A5F',
        900: '#1E7853'
      },
      dark: {
        default: '#3A3D42',
        100: '#909499',
        200: '#7D8085',
        300: '#6E7277',
        400: '#56595F',
        500: '#3A3D42',
        600: '#242629',
        700: '#212326',
        800: '#1D1E21',
        900: '#151618'
      },
      gray: {
        default: '#94A1B2',
        50: '#EFEFEF',
        100: '#E3E4E5',
        200: '#D9DBDE',
        300: '#CED1D4',
        400: '#A8B1BD',
        500: '#94A1B2',
        600: '#798594',
        700: '#5B697A',
        800: '#4D596A',
        900: '#445263'
      },
      blue: {
        default: '#05C1E7',
        100: '#99EDFD',
        200: '#66E4FD',
        300: '#33DBFC',
        400: '#00D2FC',
        500: '#05C1E7',
        600: '#0AB2D3'
      },
      yellow: {
        default: '#EAB509',
        100: '#FFE79B',
        200: '#FFDB69',
        300: '#FFCF37',
        400: '#FFC405',
        500: '#EAB509',
        600: '#D6A60E'
      },
      red: {
        default: '#C93148',
        100: '#FAA8AE',
        200: '#F77D86',
        300: '#F5525E',
        400: '#DB324B',
        500: '#C93148',
        600: '#B93246'
      },
      alternative: {
        default: '#479AB7',
        100: '#92C9DD',
        200: '#6EB7D2',
        300: '#5CAFCC',
        400: '#4AA6C7',
        500: '#479AB7',
        600: '#458EA9'
      },
    },
    fontFamily: {
      inter: ['Inter var', ...defaultTheme.fontFamily.sans],
      display: ['Gilroy', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: '0.5rem',
      sm: '0.75rem',
      base: '0.875rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '2.5xl': '2rem',
      '3xl': '2.25rem',
      '3.5xl': '2.5rem',
      '4xl': '3rem',
      '4.5xl': '3.25rem',
      '5xl': '3.5rem',
      '5.5xl': '3.75rem',
      '6xl': '4rem',
      '6.5xl': '4.25rem',
      '7xl': '4.5rem',
      '7.5xl': '4.75rem',
      '8xl': '5rem',
      '8.5xl': '5.25rem',
      '9xl': '5.5rem',
      '9.5xl': '5.75rem',
      '10xl': '6rem',
      '12xl': '7rem',
    },
    extend: {
      inset: {
        full: '100%',
      },
      spacing: {
        16: '4rem',
        20: '5rem',
        24: '6rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        28: '7rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        32: '8rem',
        33: '8.25rem',
        34: '8.5rem',
        36: '9rem',
        38: '9.5rem',
        50: '12.5rem',
        56: '14rem',
        72: '18rem',
        75: '18.75rem',
        80: '20rem',
        85: '21.5rem',
        87: '22rem',
        88: '22.25rem',
        89: '22.5rem',
        90: '22.75rem',
        91: '23rem',
        92: '23.25rem',
        93: '23.5rem',
        94: '23.75rem',
        95: '24rem',
        96: '24.25rem',
        97: '24.5rem',
        98: '24.75rem',
        99: '25rem',
        100: '25.25rem',
        101: '25.5rem',
        102: '25.75rem',
        112: '29.25rem',
        125: '31.25rem',
        150: '37.5rem',
      },
      textOpacity: {
        80: '.8',
        90: '.9',
      }
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
          p: {
            lineHeight: theme('lineHeight.loose'),
          },
          h1: {
            color: theme('colors.gray.900'),
            fontFamily: `${theme('fontFamily.display')}`,
          },
          h2: {
            color: theme('colors.primary.300'),
            fontFamily: `${theme('fontFamily.display')}`
          },
          h3: {
            color: theme('colors.primary.300'),
            fontFamily: `${theme('fontFamily.display')}`
          },
          h4: {
            color: theme('colors.primary.300'),
            fontFamily: `${theme('fontFamily.display')}`
          },
          'ol li:before': {
            fontWeight: '600',
            color: theme('colors.gray.500'),
          },
          'ul li:before': {
            backgroundColor: theme('colors.gray.400'),
          },
          code: {
            color: theme('colors.gray.900'),
          },
          a: {
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.primary.300'),
            textDecoration: 'none !important',
            borderBottom: '2px solid',
            borderColor: theme('colors.primary.300'),
            transition: 'all .2s ease-in-out'
          },
          img: {
            borderRadius: theme('borderRadius.lg'),
          },
          'a:hover': {
            color: theme('colors.primary.400'),
            borderColor: theme('colors.primary.400'),
          },
          pre: {
            color: theme('colors.dark'),
            backgroundColor: theme('colors.gray.50'),
          },
          blockquote: {
            color: theme('colors.gray.900'),
            borderLeftColor: theme('colors.gray.200'),
          },
        },
      },
    }),
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive', 'focus'],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive', 'focus'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'focus'],
    textOpacity: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive', 'focus'],
    typography: ['responsive'],
    spacing: ['responsive', 'hover', 'focus', 'last']
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const filterUtilities = {
        '.grayscale-none': {
          filter: 'grayscale(0)',
        },
        '.grayscale-1': {
          filter: 'grayscale(1)',
        },
      };

      addUtilities(filterUtilities, ['responsive', 'hover']);
    }),
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/typography'),
    function ({ addBase }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Gilroy',
            fontWeight: '600',
            fontStyle: 'normal',
            fontDisplay: 'swap',
            src: 'url("/fonts/Gilroy-semibold.woff2") format("woff2")',
          },
        }
      ])
    },
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}