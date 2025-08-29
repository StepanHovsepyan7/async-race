import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="h-[20vh] px-16 py-6 flex flex-row items-center w-full border-b border-black bg-orange-500">
      <div className="flex flex-col space-y-4">
        <Button onClick={() => navigate("/")}>
          <div className="flex flex-row space-x-4 items-center">
            <div>
              <Icon name="garage" />
            </div>
            <div>
              <span>Garage</span>
            </div>
          </div>
        </Button>
        <Button onClick={() => navigate("/winners")}> 
          <div className="flex flex-row space-x-4 items-center">
            <div>
              <Icon name="winner" />
            </div>
            <div>
              <span>Winner</span>
            </div>
          </div>
        </Button>
      </div>
      <div className="flex flex-1 flex-row justify-center text-[70px] font-bold text-black">
        <h1>ASYNC RACE</h1>
      </div>
    </div>
  );
}

export default Header;
