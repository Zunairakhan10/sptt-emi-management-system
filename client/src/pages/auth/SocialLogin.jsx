import {
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="mt-8">

      {/* Divider */}

      <div className="flex items-center gap-4">

        <div className="flex-1 h-px bg-gray-200"></div>

        <span className="text-gray-500 text-sm">
          or continue with
        </span>

        <div className="flex-1 h-px bg-gray-200"></div>

      </div>

      {/* Icons */}

      <div className="flex justify-center gap-5 mt-8">

        {[
          FaGoogle,
          FaFacebookF,
          FaInstagram,
          FaLinkedinIn,
        ].map((Icon, index) => (
          <button
            key={index}
            className="
              w-14
              h-14
              rounded-2xl
              border
              border-gray-200
              bg-white
              flex
              items-center
              justify-center
              text-xl
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <Icon />
          </button>
        ))}

      </div>

      {/* Footer */}

      <p className="text-center mt-8 text-gray-500">

        Don't have an account?

        <button className="ml-2 text-blue-600 font-semibold hover:underline">

          Register

        </button>

      </p>

    </div>
  );
};

export default SocialLogin;