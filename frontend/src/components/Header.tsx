import {Link} from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import SignOutButton from './SignOutButton';

const Header = () => {

    const {isLoggedIn} = useAppContext();

    return (
        <div className="navbar">
            <span className="batch1">
                <Link to ="/">Home</Link>
            </span>

        
        <Link to='/findteams'>Find Teams</Link>
        <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
                <a href="#service1">IT & Computing</a>
                <a href="#service2">Artificial Intelligence</a>
                <a href="#service3">Machine Learning</a>
            </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn">Find Work</button>
            <div className="dropdown-content">
                <a href="#service1">Meta</a>
                <a href="#service2">Microsoft</a>
                <a href="#service3">Google</a>
            </div>
        </div>
        <div>
            <a href="#contact">Contact us</a>
            <span className="flex space-x-2">
                {isLoggedIn ? ( 
                    <>
                        <Link to='/complete-profile'>Complete Profile</Link>
                        <Link to="/Work">Work</Link>
                        <SignOutButton />
                    </>
                    ) : (
                    <>
                        <Link to='/sign-in'>Sign in</Link>
                        <Link to='/register'>Sign up</Link>
                    </>
                )}
            </span>
        </div> 
        </div>  
    );
}

export default Header;
