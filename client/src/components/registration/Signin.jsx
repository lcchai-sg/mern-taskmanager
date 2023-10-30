import "./registration.scss";
import "../../styles/components/_button.scss";
import { useState } from "react";

const Signin = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    
    return (
        <div>
            <div className="signup-form">
                <div className="signup-form__wrapper">
                    <form className="form" onSubmit={handleSubmit}>
                        <h4>Sign in</h4>
                        <div className="form-group">
                            <input type="email" placeholder="enter email" name="email" value={state.email} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="enter password" name="password" value={state.password} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <button className="button">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;