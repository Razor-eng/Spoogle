module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/index.js'
  ],
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}