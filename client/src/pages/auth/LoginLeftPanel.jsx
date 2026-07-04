import TravelShader from "../../components/backgrounds/TravelShader";
import logo from "../../assets/images/logo.png";
const features = [
  {
    icon: "credit_card",
    title: "Easy EMI",
    desc: "Flexible monthly installments for your dream vacation.",
  },
  {
    icon: "verified_user",
    title: "Secure Membership",
    desc: "Verified, protected and secure membership system.",
  },
  {
    icon: "qr_code_2",
    title: "QR Verification",
    desc: "Instant QR check-in and membership verification.",
  },
  {
    icon: "badge",
    title: "Membership Cards",
    desc: "Digital premium travel member cards.",
  },
];

const LoginLeftPanel = () => {
  return (
    <section className="relative flex min-h-[640px] w-full flex-col overflow-hidden lg:min-h-screen">
      {/* Shader background */}
      <div className="absolute inset-0">
        <TravelShader />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#061528]/92 via-[#0a1f3d]/88 to-[#051525]/95" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col px-10 py-12 sm:px-12 sm:py-12 lg:px-20 lg:py-16 xl:px-16 xl:py-16">
        {/* Brand */}
        <header className="shrink-0">
        <div className="flex items-center gap-4">

    <img
        src={logo}
        alt="Spark Tour & Travel"
        className="h-14 w-auto object-contain"
    />

    <div>

        <h2 className="text-xl font-bold tracking-tight text-white">
            Spark Tour & Travel
        </h2>

        <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
            EMI MANAGEMENT PLATFORM
        </p>

    </div>

</div>
        </header>

        {/* Hero + Features */}
        <div className="flex flex-1 flex-col justify-center py-10 lg:py-12">
          <div className="max-w-md space-y-8 lg:space-y-9">
            <div className="space-y-4">
              <h1 className="text-[3.25rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.5rem]">
                Travel More.
                <br />
                <span className="text-cyan-300">Pay Smart.</span>
              </h1>
              <p className="text-sm leading-7 text-white/75 max-w-[480px] sm:text-[15px]">
                Manage travel memberships, customer EMI plans, QR verification, and secure payments from one intelligent platform.
              </p>
            </div>

            {/* Feature cards */}
            <div className="relative space-y-4">
              {features.map((feature, idx) => (
                <article
                  key={idx}
                  className="login-feature-card group flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur-md transition-all duration-300 sm:gap-4 sm:px-4 sm:py-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-cyan-200 transition-colors duration-300 group-hover:bg-blue-500/30">
                    <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13px] font-semibold text-white sm:text-sm">{feature.title}</h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-white/45 sm:text-xs">{feature.desc}</p>
                  </div>
                  <span className="material-symbols-outlined shrink-0 text-[18px] text-white/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/50">
                    chevron_right
                  </span>
                </article>
              ))}

              {/* Floating Silver Member card */}
              <div
                className="login-member-float pointer-events-none absolute -right-10 -bottom-10  z-20 hidden w-52 rounded-2xl border border-white/20 bg-gradient-to-br from-slate-400/30 to-slate-600/20 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-right-6 lg:w-48 lg:p-3.5"
                aria-hidden="true"
              >
                <p className="text-[8px] font-semibold uppercase tracking-widest text-white/50">Silver Member</p>
                <p className="mt-1 text-xs font-bold text-white">John Doe</p>
                <div className="mt-2.5 flex items-end justify-between">
                  <p className="font-mono text-[9px] tracking-wider text-white/70">**** 0092</p>
                  <div className="flex h-7 w-7 items-center justify-center rounded bg-white/15">
                    <span className="material-symbols-outlined text-[14px] text-white/60">qr_code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto shrink-0 flex items-center gap-2 pt-10">
          <span className="material-symbols-outlined text-[16px] text-white/30">shield</span>
          <p className="text-[11px] text-white/35">
            © 2024 Spark Tour &amp; Travel. Elevating Global Journeys.
          </p>
        </footer>
      </div>

      {/* Decorative plane trail — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
        <svg className="absolute left-0 top-[38%] w-[70%] opacity-70" height="140" viewBox="0 0 600 140" fill="none">
          <path
            d="M0,110 Q150,30 300,70 T600,20"
            stroke="url(#trailGrad)"
            strokeWidth="2"
            strokeDasharray="4,8"
          />
          <defs>
            <linearGradient id="trailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        <div className="animate-plane absolute top-[30%] left-[18%]">
          <span className="material-symbols-outlined rotate-45 text-3xl text-cyan-300/40">flight</span>
        </div>
      </div>
    </section>
  );
};

export default LoginLeftPanel;
