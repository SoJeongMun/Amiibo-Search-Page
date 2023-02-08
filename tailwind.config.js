/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: { center: true },
    extend: {
      // 기존 스타일에 추가로 값을 넣어줄 경우에는 extend 객체 안에 쓰기
    },
    screens: {
      sm: '465px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1640px',
    },
  },
  plugins: [require('autoprefixer')],
}
