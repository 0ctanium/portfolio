const defaultConfig = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const Color = require('color');

module.exports = {
  content: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", ...defaultConfig.fontFamily.sans],
        display: ['brandon-grotesque'],
      },
      spacing: {
        38: '9.5rem',
      },
      inset: {
        '-13': '-3.25rem',
      },
      borderWidth: {
        6: '6px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      borderWidth: ['hover'],
      borderColor: ['hover'],
      flexDirection: ['even'],
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    plugin(function ({ theme, e, addComponents }) {
      const { blue } = theme('colors');
      const colors = {
        blue,
      };

      // Components
      const components = [];

      function createButton(key, color) {
        return {
          [`.${e(`btn-${key}`)}`]: {
            '--tw-border-opacity': 1,
            borderColor: color,
            borderRadius: 9999,
            borderWidth: 2,
            fontFamily: theme('fontFamily.sans'),
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '1.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            '--tw-text-opacity': 1,
            color: color,

            transitionProperty:
              'background-color, border-color, color, box-shadow',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '300ms',

            '&:hover': {
              color: Color(color).isDark()
                ? theme('colors.gray.200')
                : theme('colors.gray.800'),
              backgroundColor: color,
            },
            '&:focus': {
              outline: '2px solid transparent',
              outlineOffset: 2,
              boxShadow:
                'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
              '--tw-ring-offset-shadow':
                'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
              '--tw-ring-shadow':
                'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
              '--tw-ring-color': `rgba(${Color(color).red()}, ${Color(
                color
              ).green()}, ${Color(color).blue()}, var(--tw-ring-opacity))`,
              '--tw-ring-opacity': '0.6',
            },
          },
        };
      }

      function createButtonsVariants(colorVariants = {}, baseKey = null) {
        Object.entries(colorVariants).forEach(([key, color]) => {
          if (typeof color === 'string') {
            let component;

            try {
              component = createButton(
                baseKey ? `${baseKey}-${key}` : key,
                color
              );
            } catch (e) {
              return;
            }

            if (component) {
              components.push(component);
            }
          } else if (typeof color === 'object') {
            createButtonsVariants(color, key);
          }
        });
      }
      createButtonsVariants(colors);

      addComponents(components);
    }),
  ],
};
