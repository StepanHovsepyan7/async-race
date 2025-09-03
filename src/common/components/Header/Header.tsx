
import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


function Header() {
  const push = useNavigate();

  return (
    <div className="h-[20vh] px-16 py-6 flex flex-row items-center w-full bg-[#FF1E1E] border-b border-black ">
      <div className="flex flex-col space-y-4">
        <Button onClick={() => push("/")} icon="garage">
          Garage
        </Button>
        <Button onClick={() => push("/winners")} icon="winner">
          Winner
        </Button>
      </div>
      <div className="flex flex-1 flex-row justify-center">
        <h1
          className="text-6xl font-extrabold text-black font-roboto"
          style={{
            textShadow: "4px 4px 6px rgba(0, 0, 0, 0.8)"
          }}
        >
          ASYNC RACE
        </h1>
      </div>
    </div>
  );
}

export default Header;
