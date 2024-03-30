import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";


const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className="container mx-auto grid justify-center">
            <h1 className="flex justify-center text-xl font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="mt-2">
                    <p>Name:</p>
                    <input className="border border-green-500" type="text" name="name" id="name" placeholder="name" required />
                </div>
                <div>
                    <p>Email:</p>
                    <input className="border border-green-500" type="email" name="email" id="email" placeholder="email" required />
                </div>
                <div>
                    <p>Password:</p>
                    <input className="border border-green-500" type="password" name="password" id="password" placeholder="password" required />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input className="border border-green-500" type="password" name="condirm" id="confirm" placeholder="password" required />
                </div>
                <div>
                    <button className="mt-2 p-1 rounded-lg bg-orange-400 text-white" type="submit">Submit</button>
                </div>
                
            </form>
            <div>
                <button className="mt-2 p-1 rounded-lg border bg-blue-400 text-white">Sign Up With Google</button>
            </div>
        </div>
    );
};

export default SignUp;