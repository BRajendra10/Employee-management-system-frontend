import React from "react";
import { NavLink } from "react-router-dom";
import { Users, UserPlus, SlidersHorizontal, LogOut, Settings } from "lucide-react";

function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-[#0D0F12] text-white flex flex-col border-r border-white/10">
      
      {/* LOGO */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-semibold tracking-wide">
          Employee<span className="text-indigo-500">Pro</span>
        </h1>
      </div>

      {/* NAVIGATION ITEMS */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarItem icon={<Users size={20} />} label="Employees" path="/" />
        <SidebarItem icon={<UserPlus size={20} />} label="Add Employee" path="/add-employee" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" path="/settings" />
      </nav>

      {/* LOGOUT */}
      <div className="p-4 border-t border-white/10">
        <SidebarItem icon={<LogOut size={20} />} label="Logout" path="/logout" />
      </div>

    </aside>
  );
}

function SidebarItem({ icon, label, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
        ${isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5"}`
      }
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
}

export default Sidebar;
