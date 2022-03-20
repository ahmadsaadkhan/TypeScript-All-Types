import { useState } from "react";

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoggedIn = () => { setIsLoggedIn(true) };
    const handleLoggedOut = () => { setIsLoggedIn(false) };
    return (
        <div>
            <button onClick={handleLoggedIn}>Logged In</button>
            <button onClick={handleLoggedOut}>Logged Out</button>
            <div>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</div>
        </div>
    )
}