const cards = [
    {
        discription: "Our members so impressed. It's intuitive. It's clean. It's distraction free. If you're building a company",
        imgUrl1: "./public/images/icon-star.svg",
        imgUrl: "./public/images/author-01.jpg",
        name: "Sabo Masties",
        lastName: "Founder @ Roiex",
    },
    {
        discription: "Our members so impressed. It's intuitive. It's clean. It's distraction free. If you're building a company",
        imgUrl1: "./public/images/icon-star.svg",
        imgUrl: "./public/images/author-02.jpg",
        name: "Musharof Chowdhury",
        lastName: "Founder @ Ayro UI",
    },
    {
        discription: "Our members so impressed. It's intuitive. It's clean. It's distraction free. If you're building a company",
        imgUrl1: "./public/images/icon-star.svg",
        imgUrl: "./public/images/author-03.jpg",
        name: "William Smith",
        lastName: "Founder @ Trorex",
    },
];

function Testimonalis() {
    return (
        <>
            <div className="w-full bg-[rgb(249,250,251)] mt-12">
                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <div className="text-center space-y-5 p-20">
                        <h5 className="text-blue-600 mt-5">Testimonials</h5>
                        <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl">What our Clients Say</h1>
                        <p className="font-medium text-black text-sm sm:text-base md:text-lg">
                            There are many variations of passages of Lorem Ipsum, but the majority have suffered in some form.
                        </p>
                    </div>

                    {/* Testimonial Cards Section */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {cards.map((card, index) => (
                            <div key={index} className="p-4 bg-white rounded-lg shadow-lg xl:w-[25rem] lg:w-[21rem] sm:w-[100%]">
                                {/* Star Ratings */}
                                <div className="flex justify-center gap-1 mb-4">
                                    <img className="w-5 h-5" src={card.imgUrl1} alt="Star" />
                                    <img className="w-5 h-5" src={card.imgUrl1} alt="Star" />
                                    <img className="w-5 h-5" src={card.imgUrl1} alt="Star" />
                                    <img className="w-5 h-5" src={card.imgUrl1} alt="Star" />
                                    <img className="w-5 h-5" src={card.imgUrl1} alt="Star" />
                                </div>

                                {/* Testimonial Description */}
                                <p className="text-slate-500 font-semibold mb-4">{card.discription}</p>

                                {/* Client Info */}
                                <div className="flex items-center justify-start space-x-4">
                                    <img className="w-16 h-16 rounded-full" src={card.imgUrl} alt={card.name} />
                                    <div>
                                        <h6 className="font-bold">{card.name}</h6>
                                        <h6 className="font-semibold text-gray-400">{card.lastName}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center mt-16 ">
                        <button className="w-12 bg-gray-100 hover:bg-white hover:shadow-md h-10 rounded-md">
                            <img className="p-1 ml-2" src="./public/images/downl.svg" alt="Download" />
                        </button>
                        <button className="w-12 bg-white hover:bg-white hover:shadow-md h-10 rounded-md">
                            <img className="p-1 ml-2" src="./public/images/downl.svg" alt="Download" />
                        </button>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
}

export default Testimonalis;
