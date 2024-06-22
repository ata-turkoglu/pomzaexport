import React, {
    useLayoutEffect,
    useEffect,
    useState,
    useRef,
    cloneElement,
} from "react";

import "./css/textTransition.css";

export function TextContainer({ children }) {
    return children;
}

export default function TextTransitions({ children }) {
    const [content, setContent] = useState(null);

    const setWords = (item) => {
        return item.props.children.split(" ").map((el, idx) => {
            return (
                <span
                    key={idx}
                    className="tt mr-2 text-white text-2xl md:text-5xl"
                >
                    {el}
                </span>
            );
        });
    };

    useLayoutEffect(() => {
        const list = children.map((item, index) => {
            return (
                <h1
                    id={"text" + index}
                    key={index}
                    className={index != 0 ? "tth1 hidden" : "tth1"}
                >
                    {setWords(item)}
                </h1>
            );
        });
        setContent(list);

        let counter = 1;

        const showIntrvl = setInterval(() => {
            if (counter != 0) {
                document.getElementById("text" + (counter - 1)).style.display =
                    "none";
            } else {
                const prevEl = document.getElementById(
                    "text" + (children.length - 1)
                );
                if (prevEl.style.display == "block") {
                    prevEl.style.display = "none";
                }
            }

            document.getElementById("text" + counter).style.display = "block";

            if (counter < children.length - 1) {
                counter++;
            } else {
                counter = 0;
            }
        }, 5000);

        return () => {
            clearInterval(showIntrvl);
        };
    }, []);

    return <div className="h-100 w-full">{content}</div>;
}
