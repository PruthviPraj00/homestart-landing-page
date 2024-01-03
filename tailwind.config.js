/** @type {import('tailwindcss').Config} */
export default {
  content: ['**/*.html', '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      maxWidth: {
        16: '16rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
