
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const cards = [
    {
        imgUrl: "./public/images/team-01.png",
        name: "Melissa Teacher",
        lastName: "Marketing Expert",
    },
    {
        imgUrl: "./public/images/image-02.png",
        name: "Stuard Ferrel",
        lastName: "Digital Marketer",
    },
    {
        imgUrl: "./public/images/image-03.png",
        name: "Eva Hudson",
        lastName: "Creative Designer",
    },
    {
        imgUrl: "./public/images/image-04.png",
        name: "Jackie Sanders",
        lastName: "Founder @ Trorex",
    },
];

function OurTeam() {
    return (
        <>
            <div className="w-full mt-5 bg-gray-100 ">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-5 py-10">
                        <h5 className="text-blue-600">Our Team Members</h5>
                        <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl">Our Creative Team</h1>
                        <p className="font-medium text-gray-600">
                            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-5">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="p-5 font-sans shadow-lg rounded-lg w-full sm:w-[20rem] md:w-[18rem] lg:w-[15rem] xl:w-[17rem] transition-transform transform hover:scale-105"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        className="w-32 h-32 mb-3 rounded-full shadow-md"
                                        src={card.imgUrl}
                                        alt={card.name}
                                    />
                                    <h6 className="font-bold text-lg">{card.name}</h6>
                                    <h6 className="font-semibold text-gray-400">{card.lastName}</h6>
                                   <div className="md:w-1/4 mr-7">
                                  <ul className="flex gap-3 mt-4 mr-9 justify-center ">
                                    <li className="text-gray-400 "><FaFacebookF /></li>
                                    <li className="text-gray-400"><FaTwitter /></li>
                                    <li className="text-gray-400"><CiInstagram /></li>
                                    <li className="text-gray-400"><CiLinkedin /></li>
                                  </ul>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
}

export default OurTeam;
