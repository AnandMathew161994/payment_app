import { useLocation } from "react-router";
import { Appbar } from "../components/Appbar"
import { Warningbox } from "../components/Warningbox";

export const Dashboard = () => {
    const location = useLocation();
    return <div>
       {location.state ? (
      <Appbar firstname={location.state.firstname} lastname={location.state.lastname} balance = {location.state.balance}/>
    ) :  (<>
    <>You are not Signed-in</>
    <Warningbox label= {"Please"}  buttonText={"Sign-in"} to={"/signin"} />
    </>) }
        </div>
    
}

