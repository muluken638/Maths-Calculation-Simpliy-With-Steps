import React, { useState } from "react";
import { permissions } from "../auth/permissions";
import {SidebarData} from "../auth/sidebarData";
const Sidebar = ({ role }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open
  const menuItems = SidebarData[role] || [];

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index); // Toggle submenu
  };

  return (
    <div className="min-h-screen w-64 bg-blue-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Math Calculations</h1>
      <ul>
        {menuItems.map((item, index) => {
          const isAllowed = permissions[role][item.permission];

          return (
            <li key={index} className="mb-2">
              {/* Main Menu Item */}
              <div
                onClick={() => item.submenu && toggleSubmenu(index)}
                className={`flex justify-between items-center p-2 rounded transition duration-200 ${
                  isAllowed
                    ? "hover:bg-gray-700 cursor-pointer"
                    : "text-gray-500 cursor-not-allowed"
                }`}
                title={!isAllowed ? "You don't have permission to access this" : ""}
              >
                <span>
                  {item.name}
                  {!isAllowed && (
                    <span className="ml-2 text-xs text-gray-400">(Disabled)</span>
                  )}
                </span>
                {item.submenu && (
                  <span className="text-sm">
                    {openSubmenu === index ? "▲" : "▼"}
                  </span>
                )}
              </div>

              {/* Submenu */}
              {item.submenu && openSubmenu === index && (
                <ul className="ml-4 mt-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <a
                        href={subItem.link}
                        className="block p-2 hover:bg-gray-700 rounded transition duration-200"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;