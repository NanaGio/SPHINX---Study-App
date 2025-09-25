import "../App.css";
import Border from "../components/border";
import borda from "../assets/borda.png";
import estudaricon from "../assets/estudaricon.png"; 
import perfilicons from "../assets/perfilicons.png"; 

export default function Bridge(){
    return(
        <div className="center-page">
              <div className="border-container">
                <Border src={borda} />
                  <div className="icons">
                   <img src={estudaricon} alt="estudar" className="icon-img" />
                   <img src={perfilicons} alt="perfil"  className="icon-img" />
                </div>
              </div>
        </div>
    )
}