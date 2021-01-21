import React, {Component} from "react";

import LoginImage from "./assets/images/img-01.png";
import "./assets/js/main.js";
import "./assets/css/main.css";
import "./assets/css/util.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/select2/select2.min.css";
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";

class LoginPage extends Component{
    

    render(){
        return(
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src={LoginImage} alt="IMG" />
    
                            </div>

                                <form className="login100-form validate-form">
                                    <span className="login100-form-title">
                                        Welcome!
                                    </span>
                                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="email" placeholder="Email" />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                        </span>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="pass" placeholder="Password" />
                                    <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>

                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn">
                                            Login
                                        </button>
                                    </div>

                                    <div className="text-center p-t-12">
                                    <span class="txt1">
                                        Forgot {" "}
                                    </span>
                                        <a className="txt2" href="src\Containers\ForgotUserAndPass">
                                        Username/Password?
                                    </a>
                                    </div>

                                    <div className="text-center p-t-136">
                                        <a className="txt2" href="src\Containers\CreateAccount">
                                            Create your Account
                                            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                                        </a>
                                    </div>
                                </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
