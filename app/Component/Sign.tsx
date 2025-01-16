"use client"
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SigninComponent = () => {

    const [username,setUsernmae] = useState("");
    const [password,setPassword] = useState("");

    const router = useRouter();

    return(
        <div>
            Sign In page <br />
            <div>
                <label htmlFor="">User name</label>
                <input type="text" className="border ml-2" onChange={(e) => { setUsernmae(e.target.value)}}/>
                <br /> <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="border ml-2" onChange={(e) => {setPassword(e.target.value)}}/>

                <br /><br />
                <button className="btn p-3 " onClick={ async() => {
                    const response = await axios.post("http://localhost:3000/Api/signin", {
                        username,
                        password
                    });

                    localStorage.setItem("token",response.data.token);

                    // console.log(response.data.message);
                    setUsernmae("");
                    setPassword("");
                    
                    if(response) router.push("/");
                    
                }} style={{backgroundColor:"grey", color:"black"}}> Submit!</button>
            </div>
        </div>
    );
}