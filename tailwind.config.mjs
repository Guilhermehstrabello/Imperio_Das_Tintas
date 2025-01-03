/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        lg: "1024px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
