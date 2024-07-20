import React from "react";

export interface SimpleButtonProps {
    children?: JSX.Element
    onClick: () => void;
}

const SimpleButton = ({ onClick, children }: SimpleButtonProps): JSX.Element => (
    <button onClick={onClick}>
        {children}
    </button>
);

export default SimpleButton;