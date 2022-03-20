import { useContext } from 'react';
import { AppContext } from './context/AppContext';

export const UserContext = () => {
    const {user, setUser } = useContext(AppContext);
    const handleLoggedIn = () => {
            setUser({
                name: 'Ahmad Saad',
                email: 'ahmad.saad.khn@gmail.com'
            })
    };
    const handleLoggedOut = () => { setUser(null) };

    return (
        <div>
            <button onClick={handleLoggedIn}>Logged In (useContext)</button>
            <button onClick={handleLoggedOut}>Logged Out(use Context)</button>
            <div>User name is {user && user.name} </div>
            <div>email is {user && user.email} </div>
        </div>
    )
}