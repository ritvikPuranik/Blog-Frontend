import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    let navigate = useNavigate(); 
    const [credentials, setCredentials]= useState({
        email:"",
        password:""
    })
    const [userDetails, setUserDetails]= useState({
        name:"",
        email:"",
        password:""
    })

    const modifyCredentials = (event)=>{
        let {name, value} = event.target;
        setCredentials(prevCredentials=>{
            return({...prevCredentials,
                [name]:value});
        })
        // console.log("credentials now>", credentials);
    }

    const modifyUserDetails = (event)=>{
        let {name, value} = event.target;
        setUserDetails(prevUserDetails=>{
            return({...prevUserDetails,
                [name]:value});
        })
        // console.log("credentials now>", credentials);
    }

    const registerUser = async (event)=>{
        // event.preventDefault();
        let {name, email, password} = userDetails;
        let raw = JSON.stringify({
            "name": name,
            "email": email,
            "password":password
        });
        event.preventDefault();
        let requestOptions = {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: raw,
            redirect: 'follow'
        };
        try{
            let signup = await fetch(`/signup`, requestOptions);
            console.log("response status>>", signup.status);
            if(signup.status === 201){
                console.log("Signup Successful");
                let signupJson = await signup.json();
                console.log("signupJson>>", signupJson);
                localStorage.setItem("userAuth", signupJson.ID);
            }else{
                console.log("Signup Failure");
                localStorage.clear();
            }

            let path = `/`; 
            navigate(path);
        }catch(err){
            console.log("Signup failure>", err);
        }
    }

    const authorizeUser = async (event)=>{
        // event.preventDefault();
        try{
            let login = await fetch(`/login?email=${credentials.email}&password=${credentials.password}`);
            console.log("response status>>", login.status);
            if(login.status === 200){
                console.log("Login Successful");
                let loginJson = await login.json()
                localStorage.setItem("userAuth", loginJson.ID);
            }else{
                console.log("Login Failure");
                //clear all local storage
                localStorage.clear();
            }
            // console.log("All Articles>", articleSubmit);

            let path = `/`; 
            navigate(path);
        }catch(err){
            console.log("Login failure>", err);
        }
    }

    return(
        <div class="main">  	
            <input type="checkbox" id="chk" aria-hidden="true" />

			<div class="signup">
				<form onSubmit={registerUser}>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" onChange={modifyUserDetails} class="login-input" name="name" placeholder="User name" value={userDetails.name} required />
					<input type="email" onChange={modifyUserDetails} class="login-input" name="email" placeholder="Email" value={userDetails.email} required />
					<input type="password" onChange={modifyUserDetails} class="login-input" name="password" placeholder="Set Password" value={userDetails.password} required />
					<button type="submit">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form onSubmit={authorizeUser}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" onChange={modifyCredentials} class="login-input" name="email" placeholder="Email" value={credentials.email} required />
					<input type="password" onChange={modifyCredentials} class="login-input" name="password" placeholder="Password" value={credentials.password} required />
					<button>Login</button>
				</form>
			</div>
        </div>
    )
}

export default Login;
