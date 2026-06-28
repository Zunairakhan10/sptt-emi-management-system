import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginInput = ({ label, type, placeholder }) => {
  const Icon = type === "email" ? FaEnvelope : FaLock;

  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">

        <Icon
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type={type}
          placeholder={placeholder}
className="
w-full
rounded-2xl
border
border-slate-200
bg-slate-50
pl-14
pr-5
py-7
text-slate-700
placeholder:text-slate-400
transition-all
duration-300
focus:bg-white
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
        />

      </div>
    </div>
  );
};

export default LoginInput;