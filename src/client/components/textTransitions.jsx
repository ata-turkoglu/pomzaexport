import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

export function textContainer({ children }) {
    return <span>{children}</span>;
}

export default function TextTransitions() {
    const [content, setContent] = useState(null);
    return <div className="h-fit">{content}</div>;
}
