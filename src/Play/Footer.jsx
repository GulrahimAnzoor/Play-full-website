import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <>
      <section className="bg-[rgb(9,14,52)] w-full ">
        <div className="container mx-auto px-4 py-8">
          <div className="footer flex flex-col md:flex-row md:justify-between mt-16 space-y-8 md:space-y-0">

            {/* Logo and Social Links Section */}
            <div className="md:w-1/4">
              <img className="p-3" src="./public/images/logo.svg" alt="Logo" />
              <p className="text-white p-3 text-sm">
                We create a digital experience for brands and companies by using technology.
              </p>
              <ul className="flex gap-4 pl-3 mt-4 ">
                <li className="text-white"><FaFacebookF /></li>
                <li className="text-white"><FaTwitter /></li>
                <li className="text-white"><CiInstagram /></li>
                <li className="text-white"><CiLinkedin /></li>
              </ul>
            </div>

            {/* Links Section */}
            <div className="flex flex-col sm:flex-row md:w-3/4 justify-between gap-8">
              
              {/* Product Links */}
              <div>
                <h3 className="text-white mb-4">Our Products</h3>
                <ul className="flex flex-col gap-y-3 text-sm no-underline ">
                  <li><a className=" hover:text-blue-700 no-underline  " href="#">Home</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">Feature</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">About</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">Testimonial</a></li>
                </ul>
              </div>

              {/* Policy Links */}
              <div>
                <h3 className="text-white mb-4">How it Works</h3>
                <ul className="flex flex-col gap-y-3 text-white text-sm no-underline ">
                  <li><a className="hover:text-blue-700 no-underline " href="#">How it works</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">Privacy Policy</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">Terms of Service</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">Refund Policy</a></li>
                </ul>
              </div>

              {/* Additional Products */}
              <div>
                <h3 className="text-white mb-4">More Products</h3>
                <ul className="flex flex-col gap-y-3 text-white text-sm">
                  <li><a className="hover:text-blue-700 no-underline " href="#">LineIcons</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">Ecommerce HTML</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">TailAdmin</a></li>
                  <li><a className="hover:text-blue-700 no-underline " href="#">PlainAdmin</a></li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-gray-600 my-8" />
          <p className="text-center text-gray-500 text-sm">Copy right by Gul Rahim "Anzoor"</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
