type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

export const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
    return (
        <div>
            {isLoggedIn ? <span>Welcome {name}, you have {messageCount} unread messages!</span> : 'Welcome Guest'}
        </div>
    )
}