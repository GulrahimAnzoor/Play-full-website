import img1 from "../assets/images/qustion.png";
const cards = [
    {
        discription: "Our members are so impressed. It's intuitive, it's clean, and it's distraction-free. If you're building a company, this is the tool for you.",
        title: "Is TailGrids Well-Documented?",
        imgUrl:img1, 
    },
    { 
        discription: "Our members are so impressed. It's intuitive, it's clean, and it's distraction-free. If you're building a company, this is the tool for you.",
        title: "Is TailGrids Well-Documented?",
        imgUrl:img1,
    },
    { 
        discription: "Our members are so impressed. It's intuitive, it's clean, and it's distraction-free. If you're building a company, this is the tool for you.",
        title: "Is TailGrids Well-Documented?",
        imgUrl:img1,
    },
    { 
        discription: "Our members are so impressed. It's intuitive, it's clean, and it's distraction-free. If you're building a company, this is the tool for you.",
        title: "Is TailGrids Well-Documented?",
        imgUrl:img1,
    },
];

function AFQ() {
    return (
        <>
            <div className=" py-16 mt-5">
                <div className="container mx-auto px-4">
                    {/* Section Heading */}
                    <div className="text-center space-y-5">
                        <h5 className="text-blue-600">AFQ</h5>
                        <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl">Any Questions? Look Here</h1>
                        <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg">
                            There are many variations of passages of Lorem Ipsum, but the majority have suffered in some form.
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-1">
                        {cards.map((card, index) => (
                            <div key={index} className=" p-6 ">
                                <div className="flex items-center space-x-2">
                                    <img className="w-16 h-16 rounded-full" src={card.imgUrl} alt={card.title} />
                                    <div>
                                        <h4 className="text-lg font-semibold">{card.title}</h4>
                                        <p className="text-gray-500 mt-2">{card.discription}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AFQ;
