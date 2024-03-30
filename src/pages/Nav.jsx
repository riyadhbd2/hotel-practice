import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "../contexts/UserContext";


const Nav = () => {

    const {logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut(auth)
        .then(()=>{
            console.log('log out successfull');
        })
        .catch(error=>{
            console.error(error);
        })
    }

    const {user} = useContext(AuthContext);
    return (
        <div className="flex justify-evenly h-36 items-center">
            <div>

            </div>
            <div className="text-orange-500">
                <Link to='/' className="ml-2 text-2xl">Home</Link>
                <Link to='/about' className="ml-2 text-2xl">About</Link>
                <Link to= '/contact' className="ml-2 text-2xl">Contact</Link>
                {  
                    user?.uid? 
                    
                    <Link to='/login' className="ml-2 text-2xl"><button onClick={handleLogOut}>Log Out</button></Link>

                    :
                    
                    <>
                        <Link to='/login' className="ml-2 text-2xl">Login</Link>
                        <Link to='/signup' className="ml-2 text-2xl">Sign Up</Link>
                    </>
                    
                }
                
            </div>
            {user?.email}
        </div>
    );
};

export default Nav;