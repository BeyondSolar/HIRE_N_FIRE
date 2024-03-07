import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="border-b border-gray-200">
            <div className="container mx-100 px-8 flex justify-between">
                <span className="text-3xl font-bold tracking-tight">
                    <Link to='/'>HNF</Link>
                </span>
                <span className="flex space-x-8">
                    <Link to='/login'>Log in</Link>
                    <Link to='/signup'>Sign up</Link>
                </span>
            </div>
        </div>
    )
}

export default Header;