import React from "react";

const Menus = () => {
  let menus = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/blogs", name: "Blogs" },
    { id: 5, path: "/contacts", name: "contacts" },
  ];
  return (
    <div className="p-10 bg-amber-200 text-black m-10 shadow-md w-[200px]">
      {menus.map((menu) => (
        <li key={menu.id}>
          <a href={menu.path}>{menu.name}</a>
        </li>
      ))}
    </div>
  );
};

export default Menus;
