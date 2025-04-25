/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}", // pastikan path ini sesuai struktur projectmu
  ],
  theme: {
    extend: {
      // customisasi kalau ada
    },
  },
  plugins: [
    // tambahkan plugin kalau pakai tailwind forms, typography, dll.
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
