import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>();
    const [user, setUser] = useState<AuthUser>({} as AuthUser);
    const handleLoggedIn = () => {
        setUser({
            name: 'Saad',
            email: 'ahmad.saad.khan@live.com'
        })
    };
    const handleLoggedOut = () => { setUser({ name: '', email: '' }) };

    return (
        <div>
            <button onClick={handleLoggedIn}>Logged In</button>
            <button onClick={handleLoggedOut}>Logged Out</button>
            <div>User name is {user && user.name} </div>
            <div>email is {user && user.email} </div>
        </div>
    )
}