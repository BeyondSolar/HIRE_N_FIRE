//import React from 'react';

const LoginBox = () =>{
    return(
        <div className="login-box">
            <h2>Login</h2>
            <form action="#" method="post">
                <p>Username</p>
                <input type ="text" name = "username" placeholder="Enter Username" required/>
                
                <p>Password</p>
                <input type ="password" name = "password" placeholder="Enter Password" required/>
                
                <input type = "submit" value="Login"/>
            </form>
        </div>
    );
}

export default LoginBox;