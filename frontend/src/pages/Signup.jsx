
import { useState } from "react"
import { Buttoncomp } from "../components/Button"
import { Headerbox } from "../components/Headerbox"
import { Inputbox } from "../components/inputbox"
import { Subheader } from "../components/Subheade"
import { Warningbox } from "../components/Warningbox"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { SigninSuccess } from "./SigninSuccess"

export const Signup = ()=>{
    const navigate = useNavigate();

    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [mobile, setMobile]= useState("")
    const [ sucessvalue, setSuccessValue]=useState("")

    return  <div className="bg-slate-300 h-screen flex justify-center ">
        <div className="pd-3 flex flex-col justify-center text-center">
        <div className="rounded-lg bg-white w-120 text-center p-2 h-max px-4 shadow border-black border-2">
        <Headerbox label={"Sign-up"}/>
        <Subheader label={"Enter information to create an account"}/>
        <Inputbox label={"First Name"} placeholder={"Enter First Name"} onChange={(e)=>{setFirstName(e.target.value)}}/>
        <Inputbox label={"Last Name"} placeholder={"Enter Last Name"} onChange={(e)=>{setLastName(e.target.value)}}/>
        <Inputbox label={"Email"} placeholder={"Enter email id"} onChange={(e)=>{setEmail(e.target.value)}}/>
        <Inputbox label={"Password"} placeholder={"Password"} onChange={(e)=>{setPassword(e.target.value)}} />
        <Inputbox label={"Phone no (+1) "} placeholder={"Enter Mobile Number"} onChange={(e)=>{setMobile(e.target.value)}}/>
        <Buttoncomp label = {"Submit"} onClick={
           async ()=>{ const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username : email,
            firstName : firstName,
            lastName : lastName,
            password : password,
            mobile : mobile
          })
          if(response.data.message== "User created successfully") {
            setSuccessValue(response.data.message)
            console.log(response.data.message)
            navigate("/usercreated")
          }
        }
        }/> 
        <Warningbox label= {"Already have an Account?"}  buttonText={"Sign-in"} to={"/signin"} />
        </div>
        </div>
        
    </div>

}
