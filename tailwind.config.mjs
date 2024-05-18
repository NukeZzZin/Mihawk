/** @type {import("tailwindcss").Config} */

const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    plugins: [
      require("tailwindcss-animate"),
    ],
};

export default config;
