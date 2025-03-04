import React from "react";
import loupe from "../../img/assets/index.png";
import { useNavigate } from "react-router-dom";

function Input() {
  const navigate = useNavigate();

  const handleSubmit = () => navigate("/sponsor");

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input className="homeInput font " type="text" placeholder="" />
        <img
          alt="loupe"
          type="submit"
          src={loupe}
          className="loupe"
          onClick={() => navigate("/sponsor")}
        />
      </form>
    </div>
  );
}

export default Input;
