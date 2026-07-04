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

      <div className="my-7 flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200"></div>

       <span className="bg-white px-3 text-sm text-gray-500">
          or continue with
        </span>

        <div className="flex-1 h-px bg-gray-200"></div>

      </div>

      {/* Icons */}

   <div className="flex justify-center gap-4 mt-7">

  <button className="w-11 h-11 rounded-full bg-red-50 hover:bg-red-100 hover:scale-110 transition-all duration-300 flex items-center justify-center">
    <FaGoogle className="text-red-500 text-lg" />
  </button>

  <button className="w-11 h-11 rounded-full bg-blue-50 hover:bg-blue-100 hover:scale-110 transition-all duration-300 flex items-center justify-center">
    <FaFacebookF className="text-blue-600 text-lg" />
  </button>

  <button className="w-11 h-11 rounded-full bg-pink-50 hover:bg-pink-100 hover:scale-110 transition-all duration-300 flex items-center justify-center">
    <FaInstagram className="text-pink-500 text-lg" />
  </button>

  <button className="w-11 h-11 rounded-full bg-sky-50 hover:bg-sky-100 hover:scale-110 transition-all duration-300 flex items-center justify-center">
    <FaLinkedinIn className="text-sky-600 text-lg" />
  </button>

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