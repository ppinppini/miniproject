import { useNavigate } from "react-router-dom";
import "./Button.css";
export default function Button({text,onClick}) {
       
    return (
        <div className="button__box"> 
        <button className="button" onClick={onClick}>{text}</button>
        </div>
        )
}

