import React from "react"
import classNames from "classnames";
import "../style/Button.scss"

interface BtnProps {
    text: string;
    type: string;
    size: string;
    color: string;
    click: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>  void;
    name: string;
}
const Button: React.FC<BtnProps> = ({
    text,
    type,
    size,
    color,
    click,
    name,
}) => {
    return (
        <button
            className={classNames("Button", type, size, color)}
            onClick={click}
            name={name}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    type: "defualt",
    size: "medium",
    color: "white",
};
export default Button;
