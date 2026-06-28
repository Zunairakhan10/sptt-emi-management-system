import LoginLeftPanel from "./LoginLeftPanel";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">

      <section className="mx-auto grid min-h-screen w-full lg:grid-cols-[45%_55%]">

        {/* Left Panel */}
        <LoginLeftPanel />

        {/* Right Panel */}
        <div className="relative flex items-center justify-center px-10 lg:px-16">

          {/* Background Glow */}
          <div className="absolute top-24 right-20 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>

          <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

          {/* Login Form */}
          <div className="relative z-10 w-full max-w-xl">
            <LoginForm />
          </div>

        </div>

      </section>

    </main>
  );
};

export default Login;