import "../App.css";
import Logo from "../components/logo";
import Border from "../components/border";
import borda from "../assets/borda.png";
import inviteCodePng from "../assets/inviteCodePng.png";
import CodeInput from "../components/CodeInput";


export default function Home() {
  return (
    <div className="center-page">
      <div className="border-container">
        <Border src={borda} />
      </div>
      <div className="logo-inside-border">
        <Logo src={inviteCodePng} />
        <CodeInput />
      </div>
    </div>
  );
}
