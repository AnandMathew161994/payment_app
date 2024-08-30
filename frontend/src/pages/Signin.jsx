import { Buttoncomp } from "../components/Button"
import { Headerbox } from "../components/Headerbox"
import { Inputbox } from "../components/inputbox"
import { Subheader } from "../components/Subheade"

export const Signin = ()=>{
    return  <div className="bg-slate-300 h-screen flex justify-center ">
        <div className="pd-3 flex flex-col justify-center text-center">
        <div className="rounded-lg bg-white w-96 text-center p-2 h-max px-4">
        <Headerbox label={"Sign-in"}/>
        <Subheader label={"Enter information to Login"}/>
        <Inputbox label={"Email"} placeholder={"Enter email id"}/>
        <Inputbox label={"Password"} placeholder={"Password"}/>
        <Buttoncomp label = {"Submit"}/> </div>
        </div>
        
    </div>

}
