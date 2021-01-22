import React, {Component} from "react";
import Tilt from 'react-tilt';
import axios from 'axios';

import LoginImage from "./assets/images/img-01.png";
import Loading from "../../Components/Loading.js";
import "./assets/js/main.js";
import "./assets/css/main.css";
import "./assets/css/util.css";
import "./assets/vendor/animate/animate.css";
import "./assets/vendor/css-hamburgers/hamburgers.min.css";
import "./assets/vendor/select2/select2.min.css";
import "./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css";

class LoginPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            loading: false
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        this.setState({[name]: value});

    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        this.setState({
            submitted: true,
            loading: true
        });
        axios.post({email, password})
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }



    render(){
        const { email, password } = this.state;
        const { loading } = this.props;
        return(
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic" >
                                <Tilt>
                                    <img src={LoginImage} alt="IMG" />
                                </Tilt>                              
                            </div>

                                <form className="login100-form validate-form">
                                    <span className="login100-form-title">
                                        Welcome!
                                    </span>
                                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input 
                                            className="input100" 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email" 
                                            defaultValue={email}
                                            onChange={() => this.handleChange}
                                           
                                        />
                                        <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                        </span>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input 
                                            className="input100" 
                                            type="password" 
                                            name="pass" 
                                            placeholder="Password" 
                                            defaultValue={password}
                                            onChange={() => this.handleChange}
                                        />
                                    <span className="focus-input100" />
                                        <span className="symbol-input100">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                        </span>
                                    </div>

                                    <div className="container-login100-form-btn">  
                                        <button 
                                            className="login100-form-btn" 
                                            onClick={() => this.handleSubmit}
                                        >       
                                            {loading ? <Loading /> : null}
                                            Login
                                        </button>
                                    </div>

                                    <div className="text-center p-t-12">
                                    <span className="txt1">
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
