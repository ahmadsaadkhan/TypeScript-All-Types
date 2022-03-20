type ContainerType = {
    styles: React.CSSProperties,
}

export const Container = ({styles}: ContainerType) => {
    return (
        <div style={styles}>I am inevitable</div>
    )
}