import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const naviget = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const {logIn} = useContext(AuthContext);

    const handleLogIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            naviget(from, {replace:true})
        })
        .catch(error =>{
            console.error(error);
        })

    }
    return (
        <div className="container mx-auto grid justify-center">
        <h1 className="flex justify-center text-xl font-bold">Login</h1>
        <form onSubmit={handleLogIn}>
            <div>
                <p>Email:</p>
                <input className="border border-green-500" type="email" name="email" id="email" placeholder="email" required />
            </div>
            <div>
                <p>Password:</p>
                <input className="border border-green-500" type="password" name="password" id="password" placeholder="password" required />
            </div>
           
            <div>
                <button className="mt-2 p-1 rounded-lg bg-orange-400 text-white" type="submit">Submit</button>
            </div>
            
        </form>
        <div>
            <button className="mt-2 p-1 rounded-lg bg-blue-500 text-white">Login With Google</button>
        </div>
    </div>
    );
};

export default Login;