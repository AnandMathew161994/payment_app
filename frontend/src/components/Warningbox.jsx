import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

export const Warningbox = ({label, buttonText, to})=>{


    return <>
   <div>
   {label}
   <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
   </div>
    </>
}