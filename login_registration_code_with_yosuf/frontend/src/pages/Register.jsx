
const Register = () => {
    return (
        <div>
            <div>
                <form >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" />
                    </div>

                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" placeholder="First Name" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}
export default Register;