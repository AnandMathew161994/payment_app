
import { useCallback, useState,useRef, useEffect } from "react"
import { Buttoncomp } from "../components/Button"
import { Headerbox } from "../components/Headerbox"
import { Inputbox } from "../components/inputbox"
import { Subheader } from "../components/Subheade"
import { Warningbox } from "../components/Warningbox"
import axios from "axios";
import { useNavigate } from "react-router-dom"


export const Signup = ()=>{
   

    const [firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [mobile, setMobile]= useState("")


    const dependencyRef = useRef([firstName, lastName, email,password,mobile]);
    
    // to avoid re-renders
    const createDynamicCallback = (setterName, setterFunction) => {
      return useCallback((e) => {
        setterFunction(e.target.value);
      }, [setterName]); 
    };

    return      <div className="bg-slate-300 h-screen flex justify-center ">
        <div className="pd-3 flex flex-col justify-center text-center">
        <div className="rounded-lg bg-white w-120 text-center p-2 h-max px-4 shadow border-black border-2">
        <Headerbox label={"Sign-up"}/>
        <Subheader label={"Enter information to create an account"}/>
        <Inputbox label={"First Name"} placeholder={"Enter First Name"} onChange={createDynamicCallback(firstName,setFirstName)}/>
        <Inputbox label={"Last Name"} placeholder={"Enter Last Name"} onChange={createDynamicCallback(lastName,setLastName)}/>
        <Inputbox label={"Email"} placeholder={"Enter email id"} onChange={createDynamicCallback(email,setEmail)}/>
        <Inputbox label={"Password"} placeholder={"Password"} onChange={createDynamicCallback(password,setPassword)} />
        <Inputbox label={"Phone no (+1) "} placeholder={"Enter Mobile Number"} onChange={createDynamicCallback(mobile,setMobile)}/>
           <ModifiedButtoncomp firstName={firstName} lastName={lastName} password={password} username={email} mobile={mobile}/>
        <Warningbox label= {"Already have an Account?"}  buttonText={"Sign-in"} to={"/signin"} />
        </div>
        </div>
        
    </div>
     

}



const ModifiedButtoncomp = ({firstName,username,lastName,password,mobile}) => { 
  const navigate = useNavigate();

  return (
    <>
      
      <Buttoncomp label = {"Submit"} onClick={
           async ()=>{ const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
            username : username,
            firstName : firstName,
            lastName : lastName,
            password : password,
            mobile : mobile
           })
           if(response.data.message == "User created successfully") {
        
            navigate("/usercreated", {state : {"message": response.data.message , "username": firstName}})
            }
          }
         }
       /> 
    </>
  )
}

