import { useContext } from "react";
import RegisterandLoginForm from "../components/RegisterandLoginForm";
import { UserContext } from "../context/UserContext";
import Chat from "../components/Chat";

export default function Routes(){
    const {username, id}= useContext(UserContext);

if(username){
    return <Chat/>;
}

    return(
        <RegisterandLoginForm/>
    );
}