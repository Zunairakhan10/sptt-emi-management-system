import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import RoleToggle from "./RoleToggle";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  return (
<div
  className="
  relative
  w-full
  max-w-xl
  overflow-hidden
  rounded-[32px]
  border
  border-white/40
  bg-white/90
  backdrop-blur-xl
  shadow-[0_35px_80px_rgba(15,23,42,0.15)]
  p-12
"
>

      {/* Glass Card */}

     <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-blue-200/40 blur-3xl"></div>

<div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-cyan-200/40 blur-3xl"></div>

<div className="relative z-10">

      <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10">

      <h1 className="text-4xl font-black tracking-tight text-slate-900">
    Welcome Back
    <RoleToggle/>
</h1>

<p className="mt-3 text-slate-500 leading-7 mt-2">
    Sign in to access your travel memberships,
    EMI plans and payment dashboard.
</p>

        <div className="mt-10 space-y-6">

          <LoginInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
          />

          <LoginInput
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

        </div>

        <div className="flex items-center justify-between mt-6">

          <label className="flex items-center gap-2 text-sm">

            <input type="checkbox"/>

            Remember Me

          </label>

          <button className="text-blue-600 text-sm hover:underline">

            Forgot Password?

          </button>

        </div>

        <div className="mt-8">

          <LoginButton />
          <div className="mt-8">
            <SocialLogin />
          </div>

        </div>

      </div>
     </div>   
    </div>

   
  );
};

export default LoginForm;