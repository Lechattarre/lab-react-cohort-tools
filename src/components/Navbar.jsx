import logo from "./../assets/logo-ironhack-blue.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 items-center px-4">
        <div className="flex items-center space-x-2 w-1/4">

          {/* Home Button (Logo) */}
          <Link to={"/"}><button className="flex items-center text-l py-1">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </button>
          </Link>
        </div>

        <div className="flex justify-center w-1/2">
          <span className="text-xl">
            Cohort Tools
          </span>
        </div>

        <div className="w-1/4 flex justify-end mr-4">
          {/* User Profile Button */}
          <Link to={"/userProfile"}><button className="flex items-center text-l py-1">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png"
              alt="Logo"
              className="h-10 w-auto border-solid border border-white rounded-3xl p-1"
            />
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
