import { useState } from "react";
import Bridge from "../pages/Bridge";
import { useNavigate } from "react-router-dom";

export default function CodeInput() {
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const validCodes = ["NANA29"]
    e.preventDefault();

    if (validCodes.includes(codigo)){
        navigate("/Bridge")
    } else {
       alert("Invalid Code!")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="type here . . ."
        className="custom-code-input"
      />
      <div>
        <button type="submit" className="submit-button">
          ♡
        </button>
      </div>
    </form>
  );
}
