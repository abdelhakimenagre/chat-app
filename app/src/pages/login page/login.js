import { useNavigate } from "react-router-dom";
import "./login.css";
import React, { useEffect, useRef, useState } from "react";
// import AuthContext from "../context/Authprovider";
import axios from "../../api/axios";


const loginUrl = "/add"


export default function Login() {
   // const { setAuth } = useContext(AuthContext)
   const userRef = useRef();
   const errRef = useRef();
   const [Email, setEmail] = useState("");
   const [pass, setPass] = useState("");
   const [errMsg, setErr] = useState("");
   const [success, setSucces] = useState(false);
   const navigatoHome = useNavigate();
   useEffect(() => {
      userRef.current.focus();
   }, []);
   useEffect(() => {
      setErr("");
   }, [Email, pass]);
   const handlSubmit = async (e) => {
      e.preventDefault();
      try {
         const respond = axios.post(loginUrl, JSON.stringify({ email: Email, password: pass }), {
            headers: {
               "Content-Type": "application/json"
            },
            withCredentials: true

         })
         console.log(respond?.data)
         // const token = respond?.data?.accessToken;
         // const roles = respond?.data?.roles;
         // setAuth({ Email, pass });
         setPass("");
         setEmail("");
         setSucces(true);


      } catch (err) {
         if (!err?.respond) {
            setErr("no server respond")
         } else if (err.respond.statue === 400) {
            setErr("this Account dosn't exist")
         } else {
            setErr("Incorect password or email")
         }
         errRef.current.focus();
      }


   }

   return (
      <div className="login">
         {success ?
            (
               <section>
                  <p>
                     You are Loged in
                     {navigatoHome("/")}
                  </p>
               </section>
            ) :
            (<section>
               <form method="post" onSubmit={handlSubmit}>
                  <p ref={errRef} aria-live="assertive" className={errMsg ? "alert alert-danger" : "ofscren"}>
                     {errMsg}
                  </p>
                  <h1>Welcome </h1>
                  <label htmlFor="Email">Email:</label>
                  <input
                     type="email"
                     id="Email"

                     autoComplete="off"
                     onChange={(e) => setEmail(e.target.value)}
                     value={Email}
                     required
                     ref={userRef} />


                  <label htmlFor="password">password</label>
                  <input
                     type="password"
                     id="password"
                     value={pass}
                     onChange={(e) => { setPass(e.target.value) }}
                  />


                  <button className="btn_login">Log in</button>
               </form>
               <p>if you don't have a account <a href="/registre" className="link">Register</a></p>
            </section>
            )}
      </div >
   )
}