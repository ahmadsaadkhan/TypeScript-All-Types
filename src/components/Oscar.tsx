import React from "react"

type oscarType = {
    children: React.ReactNode;
}

export const Oscar = ({children}: oscarType) => {
    return (
        <div className="heading">{children}</div>
    )
}