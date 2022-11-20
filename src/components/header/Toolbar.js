import { useState } from "react";

function ToolbarGroup({ children }) {
  return (
    <div className="flex items-center justify-center my-2 sm:my-0">
      <ul className="flex items-center">{children}</ul>
    </div>
  );
}

function ToolbarItem({ children }) {
  return (
    <li className="flex items-center list-none mx-1 text-lg sm:text-xl cursor-pointer">
      {children}
    </li>
  );
}

function ToolbarDropdown({ icon, children }) {
  const [show, setShow] = useState(false);

  return (
    <li 
      className="flex list-none hover:bg-gray-400 mx-1 text-lg sm:text-xl cursor-pointer"
      onClick={e => setShow(!show)}
      onMouseLeave={e => setShow(false)}
    >
      {icon}
      <ul className="absolute pt-6">
        {show && children}
      </ul>
    </li>
  );
}

function DropdownItem({ children }) {
  return (
    <li className="grid mx-0 my-1 text-lg sm:text-xl cursor-pointer hover:bg-gray-400">
      {children}
    </li>
  );
}

export { ToolbarGroup, ToolbarItem, ToolbarDropdown, DropdownItem };
