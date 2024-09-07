import { useLocation } from "react-router";
import { Appbar } from "../components/Appbar"

export const Dashboard = () => {
    const location = useLocation();
    return <div>
        {console.log(location.state.firstname)}
        <Appbar firstname={location.state.firstname} lastname={location.state.lastname} balance = {location.state.balance}/>
        </div>
    
}

