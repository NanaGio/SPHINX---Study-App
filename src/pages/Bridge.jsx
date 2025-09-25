import "../App.css";
import Border from "../components/border";
import borda from "../assets/borda.png";
import estudaricon from "../assets/estudaricon.png"; 
import perfilicons from "../assets/perfilicons.png"; 
import { useNavigate } from "react-router-dom";


export default function Bridge(){
  const navigate = useNavigate();
    return(
        <div className="center-page">
              <div className="border-container">
                <Border src={borda} />
                  <div className="icons">
                   <img 
                   src={estudaricon} 
                   alt="estudar" 
                   className="icon-img"
                   style={{cursor : "pointer"}} 
                   onClick={() => navigate("/Study") }
                   />
                   <img src={perfilicons} alt="perfil"  className="icon-img" />
                </div>
              </div>
        </div>
    )
}