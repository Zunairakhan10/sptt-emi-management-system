import {
  FaPlaneDeparture,
  FaCreditCard,
  FaShieldAlt,
  FaQrcode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCreditCard />,
    title: "Easy EMI",
    desc: "Flexible monthly installments",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Membership",
    desc: "KYC Verified Customers",
  },
  {
    icon: <FaQrcode />,
    title: "QR Verification",
    desc: "Instant Customer Lookup",
  },
];

const LoginLeftPanel = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1D4ED8] to-[#38BDF8]">

      {/* Background Blur */}

      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

      {/* Main Content */}

    <div className="relative z-10 flex h-full flex-col px-14 py-12">

        {/* Logo */}

       <div className="flex items-center gap-4 mb-16">

    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-xl">

        <FaPlaneDeparture
            className="text-blue-600 text-2xl"
        />

    </div>

    <div>

        <h2 className="text-3xl font-bold">

            Spark Tour & Travel

        </h2>

        <p className="text-blue-100">

            Membership Portal

        </p>

    </div>

</div>

        {/* Hero */}

        <div className="mt-14">

         <h1 className="text-[56px] font-black leading-[1.05] tracking-tight">

Travel More.

<br />

<span className="text-yellow-400">

Pay Smart.

</span>

</h1>1

         <p className="mt-8 max-w-md text-lg leading-8 text-blue-100">

    Manage customer memberships, EMI plans,
    QR membership cards and travel financing
    from one secure platform.

</p>
        </div>

        {/* Illustration */}

        <div className="flex justify-center mt-16 mb-16">

          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">

            <FaPlaneDeparture
              size={90}
              className="text-white"
            />

          </div>

        </div>

        {/* Features */}

        <div className="mt-auto space-y-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl transition hover:bg-white/15
hover:-translate-y-2
hover:shadow-2xl
transition-all
duration-500
cursor-pointer"
            >
              <div className="rounded-xl bg-white p-3 text-blue-600">

                {item.icon}

              </div>

              <div>

                <h3 className="text-base font-semibold text-white">

                  {item.title}

                </h3>

                <p className="text-blue-100">

                  {item.desc}

                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default LoginLeftPanel;