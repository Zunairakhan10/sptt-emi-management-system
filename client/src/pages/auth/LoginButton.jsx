const LoginButton = () => {
  return (
    <button
      className="
group
w-full
rounded-2xl
bg-gradient-to-r
from-blue-600
via-blue-500
to-purple-600
py-4
text-lg
font-bold
text-white
shadow-lg
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_20px_40px_rgba(37,99,235,.35)]
"
    >
      
      <span className="flex items-center justify-center gap-3">
  Sign In
  <span className="transition-transform duration-300 group-hover:translate-x-2">
    →
  </span>
</span>
    </button>
  );
};

export default LoginButton;