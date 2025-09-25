import "../App.css";
import Border from "../components/border";
import borda from "../assets/borda.png";
import lock from "../assets/lock.png";

export default function Study(){
    return(
        <div className="center-page">
            <div className="border-container">
                <Border src={borda} />
                    <div className="lock">
                        <img className="lock-img" src={lock}/>
                    </div>
            </div>
        </div>
    )
}