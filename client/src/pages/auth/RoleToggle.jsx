import { useState } from "react";
import { FaUserShield, FaUser } from "react-icons/fa";

const RoleToggle = () => {
  const [role, setRole] = useState("admin");

  return (
    <div className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1.5 shadow-inner mt-8 mb-8">

      <button
        onClick={() => setRole("admin")}
        className={`flex items-center justify-center gap-2 py-4 rounded-xl transition-all duration-300 font-semibold ${
          role === "admin"
            ? "bg-white shadow-lg text-blue-600"
            : "text-slate-500"
        }`}
      >
        <FaUserShield />
        Admin Login
      </button>

      <button
        onClick={() => setRole("customer")}
        className={`flex items-center justify-center gap-2 py-4 rounded-xl transition-all duration-300 font-semibold ${
          role === "customer"
            ? "bg-white shadow-lg text-blue-600"
            : "text-slate-500"
        }`}
      >
        <FaUser />
        Customer Login
      </button>

    </div>
  );
};

export default RoleToggle;