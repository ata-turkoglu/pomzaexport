/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

//export default {
//    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//    theme: {
//        extend: {
//            colors: {
//                primary: "#2596be",
//            },
//        },
//    },
//    plugins: [],
//};

export default withMT({
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2596be",
            },
        },
    },
    plugins: [],
});
