import React from "react"

type ButtonType = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({handleClick}: ButtonType) => {
    return (
        <button onClick={handleClick}>Click!</button>
    )
}