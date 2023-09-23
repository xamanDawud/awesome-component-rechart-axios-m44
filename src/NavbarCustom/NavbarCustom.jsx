import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Menus from "../Menus/Menus";

const NavbarCustom = () => {
  let [menus, setMenus] = useState(true);

  return (
    <div>
      <div>
        <AiOutlineMenuUnfold
          className="text-3xl"
          onClick={() => {
            setMenus(!menus);
          }}
        />
        <span className={`${menus ? "block" : "hidden"}`}>
          <Menus></Menus>
        </span>
      </div>
    </div>
  );
};

export default NavbarCustom;
