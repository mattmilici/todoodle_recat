module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            todoodleGreen: "#C6F6CB",
            todoodleGray: "#C4C4C4",
            todoodleBlack: "#000000",
            todoodleWhite: "#FFFFFF"
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}