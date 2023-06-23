import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    let navigate = useNavigate(); 
    const [credentials, setCredentials]= useState({
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

    const authorizeUser = async (event)=>{
        // event.preventDefault();
        //make api call to get existing user, if authorized, add to local storage the password, and retrieve this from the home page
        try{
            let login = await fetch(`/login?email=${credentials.email}&password=${credentials.password}`);
            console.log("response status>>", login.status);
            if(login.status === 200){
                console.log("Login Successful");
                //set local storage
                localStorage.setItem("userAuth", credentials.email);
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
		<div>
			<form onSubmit={authorizeUser}> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" onChange={modifyCredentials} name="email" value={credentials.email}/> 
				</div> 
				<div> 
					<label htmlFor="password">Password</label>
					<input type="password" onChange={modifyCredentials} name="password" value={credentials.password}/> 
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>

	)
}

export default Login   

{/* <section>
<span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
<div class="signin"> 

<div class="content"> 

<h2>Sign In</h2> 

<div class="form"> 

<div class="inputBox"> 

<input type="text" required /> <i>Username</i> 

</div> 

<div class="inputBox"> 

<input type="password" required /> <i>Password</i> 

</div> 

<div class="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a> 

</div> 

<div class="inputBox"> 

<input type="submit" value="Login" /> 

</div> 

</div> 

</div> 

</div>
</section> */}