/**
 * button
 * children
 * style
 * onClick
 * disabled
 */
import * as React from "react";
import "./style";

function Button(props: any) {
    let { onClick, children, style, disabled } = props;
    // 如果是两个文字，中间加空格
    if (typeof children === "string" && children.length === 2) {
        children = children.split("").join(" ");
    }
    return (
        <button
            onClick={onClick}
            className="ui-button"
            style={style}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
