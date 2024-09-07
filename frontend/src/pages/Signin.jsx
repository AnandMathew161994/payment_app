import axios from "axios"
import { Buttoncomp } from "../components/Button"
import { Headerbox } from "../components/Headerbox"
import { Inputbox } from "../components/inputbox"
import { Subheader } from "../components/Subheade"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signin = ()=>{
    const [userdata, setUserdata] = useState({ 
        username : '7543rgddf',
        password : 'sasdas'
    })
    return  <div className="bg-slate-300 h-screen flex justify-center ">
        <div className="pd-3 flex flex-col justify-center text-center">
        <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
        <Headerbox label={"Sign-in"}/>
        <Subheader label={"Enter information to Login"}/>
        <Inputbox label={"Email"} placeholder={"Enter email id"} onChange={e=> setUserdata({...userdata,username: e.target.value})} />
        <Inputbox label={"Password"} placeholder={"Password"} onChange={e=> setUserdata({...userdata,password: e.target.value})}/>
        <SigninButton userdata={userdata} /> </div>
        </div>
        
    </div>

}

// signup buttom-- > check if the user email ecists and resuts back , firstname, lastname,balance , token

const SigninButton =  (userdata)=>{
    let navigate = useNavigate()

    return <div>
        <Buttoncomp label = {"Submit"} onClick={async ()=>{
            
            try {
                const response =  await axios.get("http://localhost:3000/api/v1/user/signin", { params: userdata })
                
                if (!response.data.issues){
                    console.log("ok")
                    localStorage.setItem("token" , response.data.token)
                   
                    navigate("/dashboard", {state : {"firstname": response.data.firstname , "lastname": response.data.lastname , "balance" : response.data.balance}}) } 
                else {
                    console.log("Some issues")
                }
               }
               catch(err){
             console.log(err)
               }


        }}/> 
        
        </div>
   


}