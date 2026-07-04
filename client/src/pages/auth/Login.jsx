import SoftAurora from "../../components/backgrounds/SoftAurora";
import LoginLeftPanel from "./LoginLeftPanel";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f4f7fc] text-on-surface font-body-md">
      <div className="relative flex min-h-screen flex-col lg:flex-row">
        {/* Left Panel */}
        <aside className="relative w-full shrink-0 lg:w-[48%] lg:min-h-screen">
          <LoginLeftPanel />
        </aside>

        {/* Right Panel */}
        <section className="relative flex w-full items-center justify-center px-8 py-12 lg:w-[52%] lg:min-h-screen lg:px-16">
          {/* SoftAurora background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <SoftAurora
              color1="#eef4ff"
              color2="#b8ecff"
              brightness={0.55}
              speed={0.4}
              scale={2.2}
              enableMouseInteraction={false}
            />
          </div>

          {/* Soft ambient glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-blue-200/30 blur-[80px]" />
            <div className="absolute -left-10 bottom-1/4 h-56 w-56 rounded-full bg-cyan-200/25 blur-[70px]" />
          </div>

          <LoginForm />
        </section>
      </div>
    </main>
  );
};

export default Login;
