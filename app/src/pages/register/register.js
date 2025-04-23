
import React, { useEffect, useRef, useState } from "react";
import './register.css';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// import axios from "../api/axios";
const pass_reg = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$');
const email_reg = RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
// const Register_URL = '/login';

const Register = () => {
    const navigate = useNavigate()
    const handlredirect = () => {
        navigate('/')
    }
    const [user, setUser] = useState('');


    const userRef = useRef();

    const errRef = useRef();

    const [email, setemail] = useState('');
    const [ValidEmail, setValidEmail] = useState(false);
    const [emailFocus, setemailFocus] = useState(false);

    const [password, setpassword] = useState('');
    const [Validpassword, setValidpassword] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);

    const [Match, setMatch] = useState('');
    const [ValidMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMessage, setUrrmsg] = useState('');
    const [succes, setSucces] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        const result = email_reg.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);

    }, [email])
    useEffect(() => {
        const resulta = pass_reg.test(password);
        console.log(resulta);
        console.log(password);
        setValidpassword(resulta);
        const Matchpassword = password === Match;
        setValidMatch(Matchpassword);

    }, [password, Match]);
    useEffect(() => {
        setUrrmsg("")
    }, [Match, email, password]);



    async function handelsubmt(e) {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include', 
                body: JSON.stringify({ Username: user, Email: email, password: password })
            });
    
            
            if (!response.ok) {
                throw new Error(response.status); 
            }
    
            const data = await response.json();
            console.log(data);
    if(response.status===200){
        Swal.fire({
            icon: "success",
            title: "Welcom",
            text:  errMessage ,
          });
    }
            setSucces(true);
            setUser("");
            setemail("");
            setpassword("");
            setMatch("");
    
        } catch (err) {
           
            if (err.message === '409') {
                setUrrmsg("Email already exists");
            } else if (err.message === '500') {
                setUrrmsg("Server error");
            } else {
                setUrrmsg("Registration failed");
            }
            
            Swal.fire({
                icon: "error",
                title: "Ops",
                text:  errMessage ,
              });
        }
    }
    return (<div className="register">
        


            <section>

            
                <h1>Register</h1>

                <form onSubmit={ (e)=>handelsubmt(e)}>
                    <label htmlFor="username">Your Username</label>

                    <input
                        type="text"
                        name="Username"
                        id="username"
                        value={user}
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => { setUser(e.target.value) }}
                        required



                    />
                    <label htmlFor="email">Your Email</label>
<div>
                    <input
                        type="email"
                        name="emaiil"
                        id="email"
                        value={email}
                        autoComplete="off"
                        onChange={(e) => { setemail(e.target.value) }}
                        required
                        aria-invalid={ValidEmail ? "true" : "false"}
                        aria-describedby="uidnote"
                        onFocus={() => setemailFocus(true)}
                        onBlur={() => setemailFocus(false)}

                    /> 
                    <span className={ValidEmail ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                     </span>
                    <span className={!ValidEmail && email ? "invalid" : "hide"}>
                    <FontAwesomeIcon icon={faTimes} />
                     </span>
                  
                 </div>
                    <label htmlFor="password">
                        Password :
                    </label>
                    <div>
                   

                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                        required
                        aria-invalid={Validpassword ? "true" : "false"}
                        aria-describedby="pwdnote"
                        onFocus={() => setpasswordFocus(true)}
                        onBlur={() => setpasswordFocus(false)}

                    />
                     <span className={Validpassword ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={Validpassword || !password ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span></div>
                   
<div>
                    <label htmlFor="Confirm-password">
                        Confirm Password
                    </label>
                    <div>

                    <input
                        type="password"

                        id="Confirm-password"
                        value={Match}
                        onChange={(e) => { setMatch(e.target.value) }}
                        required
                        aria-invalid={ValidMatch ? "true" : "false"}
                        aria-describedby="Cpwdnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}

                    />
                    <span className={Match && ValidMatch ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={ValidMatch || !Match ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                    </div>
                    </div>
                    <button className="Btn_signin"  type="submit"
                        
                    >
                        Sign Up
                    </button>
                   
                </form>

                    <span> or if you have an account <Link to={"/"} style={{color:"black"}}>Login</Link></span>
            </section>
    </div>
    )
}

export default Register;