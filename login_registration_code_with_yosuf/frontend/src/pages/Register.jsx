import { Link } from "react-router-dom";
import { useState } from "react"
const Register = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    });
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <div>
                <form >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" name="username" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name="password" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name="email" />
                    </div>

                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder="First Name" name="firstName" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="Last Name" name="lastName" />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
}
export default Register;