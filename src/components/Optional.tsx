type optionalType = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

export const Optional = ({name, messageCount, isLoggedIn}: optionalType) => {
    messageCount = messageCount || 0
    return (
        <div>
            {isLoggedIn ? <h2>Welcome {name}, you have {messageCount} unread messages!</h2> : 'Welcome Guest'}
        </div>
    )
}