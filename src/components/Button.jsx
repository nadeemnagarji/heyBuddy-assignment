import React from "react";

export default function Button({
    children,
    onClick,
    type = "button",
    bgColor = "bg-[#1DA1F2]",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button onClick={onClick} className={`px-4 py-2 rounded-full ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}