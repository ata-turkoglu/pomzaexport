import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

export function SectionPart({ children }) {
    return <section className="h-screen overflow-hidden">{children}</section>;
}

export default function SectionScroller({ children }) {
    const [content, setContent] = useState(null);
    const scrollIndex = useRef(0);
    const scrollState = useRef();

    const scrollToSection = (index) => {
        const el = document.getElementById("sectionScroller");
        const height = el.clientHeight;
        el.scrollTo({
            top: height * index,
            behavior: "smooth",
        });
    };

    useLayoutEffect(() => {
        const list = children.map((item, index) => {
            return {
                ...item,
                key: index,
                _owner: { ...item._owner, ref: "section-" + index },
            };
        });
        setContent(list);
        scrollState.current = true;
    }, []);

    useEffect(() => {
        const scrollEvent = (e) => {
            if (scrollState.current && Math.abs(e.deltaY) > 15) {
                if (e.deltaY > 0) {
                    children.length - 1 > scrollIndex.current &&
                        ++scrollIndex.current;
                } else {
                    !scrollIndex.current <= 0 && --scrollIndex.current;
                }
                scrollToSection(scrollIndex.current);
                scrollState.current = false;
                setTimeout(() => {
                    scrollState.current = true;
                }, 1000);
            }
        };
        window.addEventListener("wheel", scrollEvent);

        return () => {
            window.removeEventListener("whell", scrollEvent);
        };
    }, []);

    return (
        <div id="sectionScroller" className="h-screen overflow-hidden">
            {content}
        </div>
    );
}
