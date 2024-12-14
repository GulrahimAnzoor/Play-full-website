import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNetflix } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiDark } from "react-icons/ci";

function Open() {
    return (
        <div className="w-full bg-[rgb(55,88,249)]">
            {/* Header Section */}
            <div className="text-center text-white py-12 md:py-24">
                <h1 className="font-bold mb-4 text-lg md:text-2xl lg:text-3xl xl:text-4xl">
                    Open-Source Web Template for <br />
                    SaaS, Startup, Apps, and More
                </h1>
                <p className="font-semibold text-sm md:text-base lg:text-lg xl:text-xl">
                    Multidisciplinary Web Template Built With Your Favourite Technology <br />
                    -HTML Bootstrap, Tailwind and React NextJS.
                </p>
            </div>

{/* example comment  */}



            {/* Action Buttons */}
            <div className="flex flex-wrap gap-5 justify-center -mt-8 md:-mt-16 font-semibold">
                <button className="py-2 px-6 md:py-3 md:px-12 rounded-lg bg-white text-black">
                    Download Now
                </button>
                <button className="py-2 px-6 md:py-3 md:px-12 rounded-lg flex bg-[rgb(79,108,255)] text-white font-semibold">
                    Start on Github
                </button>
            </div>

            {/* Built With Text */}
            <h5 className="text-white flex justify-center mt-8 md:mt-12">
                Built with the latest technology
            </h5>

            {/* Technology Icons */}
            <div>
                <ul className="flex justify-center gap-4 mt-4 md:mt-7 flex-wrap">
                    <li>
                        <a href="#" className="fill-white">
                            <FaBootstrap className="text-lg text-gray-300 md:text-xl lg:text-2xl hover:text-white" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="fill-white">
                            <RiTailwindCssFill className="text-lg text-gray-300 md:text-xl lg:text-2xl hover:text-white" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="fill-white">
                            <FaReact className="text-lg md:text-xl text-gray-300 lg:text-2xl hover:text-white" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="fill-white">
                            <FaHtml5 className="text-lg md:text-xl text-gray-300 lg:text-2xl hover:text-white" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="fill-white">
                            <SiNetflix className="text-lg md:text-xl text-gray-300 lg:text-2xl hover:text-white" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Image Section */}
            <div className="mt-8 md:mt-14 flex justify-center">
                <img
                    className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                    src="./public/images/hero-image.jpg"
                    alt="Hero"
                />
            </div>
        </div>
    );
}

export default Open;
