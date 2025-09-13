const config = {
  plugins: ["@tailwindcss/postcss"],
  darkMode: "class",
  theme: {
		extend: {},
		screens: {
			xs: '375px',
			sm: '540px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
			xxl: '1536px',
		}},
};

export default config;
