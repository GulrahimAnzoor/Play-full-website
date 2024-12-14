import Form from './Form';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const contact = [
    {
        description: "401 Broadway, 24th Floor,",
        name: "Orchard Cloud View, London",
        title: "Our Location",
        icon: <CiLocationOn className='text-3xl' />,
    },
    {
        description: "info@yourdomain.com",
        name: "contact@yourdomain",
        title: "How Can We Help?",
        icon: <MdOutlineMailOutline className='text-3xl' />,
    },
];

function Lets() {
    return (
        <>
            <section className="w-full bg-[rgb(233,249,255)]  py-12 h-auto mt-24">
                <div className="container mx-auto px-4">
                    {/* Contact Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-8 md:mb-0 md:w-1/2 p-6">
                            <h6 className="text-blue-700 font-semibold">CONTACT US</h6>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Let's talk about <br /> your problem
                            </h2>
                        </div>
                        <div className="w-full md:w-[24rem]">
                            <Form />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="w-full">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-8 mt-8">
                        {contact.map((card, index) => (
                            <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] p-4">
                                <div className="flex items-start space-x-4">
                                    <div className="flex items-center justify-center rounded-full text-blue-800">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">{card.title}</h4>
                                        <p className="text-gray-500 mt-1">{card.description}</p>
                                        <p className="text-gray-500 mt-1">{card.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Logos Section */}
                    <div className="mt-16 flex justify-center items-center">
                        <ul className="flex flex-wrap justify-center gap-6 py-8">
                            <li><img src="./public/images/graygrids.svg" alt="GrayGrids" className="h-8" /></li>
                            <li><img src="./public/images/lineicons.svg" alt="LineIcons" className="h-8" /></li>
                            <li><img src="./public/images/uideck.svg" alt="UIdeck" className="h-8" /></li>
                            <li><img src="./public/images/ayroui.svg" alt="AyroUI" className="h-8" /></li>
                            <li><img src="./public/images/tailgrids.svg" alt="TailGrids" className="h-8" /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Lets;
