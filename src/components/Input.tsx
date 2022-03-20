import React from "react"

type InputType = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({value, handleChange}: InputType) => {
    return <input type="text" name="name" value={value} onChange={handleChange} />
}