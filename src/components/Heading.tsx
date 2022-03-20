type headingType = {
    children: string;
}

export const Heading = ({children}: headingType) => {
    return (
        <div className="heading">{children}</div>
    )
}