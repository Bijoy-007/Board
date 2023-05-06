// import { ReactComponent as GoogleIcon } from "../Assets/icons/google.svg";
import GoogleIcon from "../Assets/icons/google.svg";
import AppleIcon from "../Assets/icons/apple.svg";

const iconStyles = {
  width: "1.5rem",
  height: "1.3rem",
  display: "inline",
  marginLeft: "0.3rem",
  marginRight: "0.4rem",
};

const SignInPage = () => {
  return (
    <div class="flex flex-row h-screen">
      <div class="basis-4/10 bg-black flex">
        <div className="fonts-montserrat font-bold text-white text-7xl m-auto">
          Board.
        </div>
      </div>
      <div class="basis-6/10 bg-white-100 flex">
        <div className="m-auto">
          {/* Heading */}
          <h1 className="fonts-montserrat font-bold text-4xl">Sign In</h1>
          <div className="mt-1 mb-4 text-base">Sign in to your account</div>
          {/* Sign In with google button  */}
          <button>
            <div className="bg-white h-7 w-76 rounded-xl inline px-4 py-2 mr-8">
              <img style={iconStyles} alt="Google Logo" src={GoogleIcon} />
              <span className="fonts-montserrat text-slate-400">
                Sign in with Google
              </span>
            </div>
          </button>
          {/* Sign in with apple button  */}
          <button>
            <div className="bg-white h-7 w-76 rounded-xl inline px-4 py-2">
              <img style={iconStyles} alt="Apple Logo" src={AppleIcon} />
              <span className="fonts-montserrat text-slate-400 p-1">
                Sign in with Apple
              </span>
            </div>
          </button>
          {/* Sign in card */}
          <div className="w-112 mt-8 bg-white rounded-3xl py-3">
            {/* Email field */}
            <div className="w-96 m-auto mt-5">
              <div className="mb-2 text-base">Email address</div>
              <input
                className="w-96 mb-4 px-2 py-2 bg-white-100 rounded-xl"
                type="email"
              />
            </div>
            {/* Password field */}
            <div className="w-96 m-auto mt-1">
              <div className="mb-2 text-base">Password</div>
              <input
                className="w-96 mb-4 px-2 py-2 bg-white-100 rounded-xl"
                type="password"
              />
            </div>
            {/* Forgot password link */}
            <div className="w-96 m-auto mt-1">
              <a
                href="/#"
                className="text-blue-600 hover:text-blue-800 hover:underline visited:text-purple-600"
              >
                Forgot password?
              </a>
              {/* Sign In button  */}
              <button>
                <div className="w-96 m-auto mt-2 mb-6">
                  <div className="bg-black rounded-xl px-2 py-2 text-white fonts-montserrat font-bold text-base text-center">
                    Sign in
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Registration text */}
          <div>
            <div className="text-center text-base pt-2">
              <span className="fonts-montserrat text-neutral-400">
                Don't have an account?
              </span>{" "}
              <span>
                <a
                  href="/#"
                  className="text-blue-600 hover:text-blue-800 hover:underline visited:text-purple-600"
                >
                  Register here
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
