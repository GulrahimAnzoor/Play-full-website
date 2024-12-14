
const cards = [
    {
        state: "Starter",
        price: "$ 25.00 Per Month",
        title: "Feature",
        listOne: "Up to 1 User",
        listTow: "All UI components",
        listThree: "Lifetime access",
        listFour: "Free updates",
        button: "Purchase Now",
    },
    {
        state: "Basic",
        price: "$ 59.00 Per Month",
        title: "Feature",
        listOne: "Up to 1 User",
        listTow: "All UI components",
        listThree: "Lifetime access",
        listFour: "Free updates",
        button: "Purchase Now",
    },
    {
        state: "Premium",
        price: "$ 99.00 Per Month",
        title: "Feature",
        listOne: "Up to 1 User",
        listTow: "All UI components",
        listThree: "Lifetime access",
        listFour: "Free updates",
        button: "Purchase Now",
    },
];

function Pricing() {
    return (
        <>
            <div className="container mx-auto px-4 mt-16">
                {/* Title Section */}
                <div className="text-center mt-32 mb-12">
                    <h4 className="text-blue-700">Pricing Table</h4>
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Awesome Pricing Plan</h1>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg">
                        There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.
                    </p>
                </div>

                {/* Pricing Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2   flex-wrap justify-around  md:w-[45rem] lg:w-[60rem] lg:grid-cols-3 xl:w-[83rem] xl:grid-cols-3 md:grid-cols-2 gap-6 sm:w-[23rem] mx-auto">
                    {cards.map((card, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl h-[35rem]  shadow-2xl flex flex-col justify-between">
                            <h2 className="font-bold flex text-xl text-center p-4">{card.state}</h2>
                            <h3 className="text-lg flex -mt-7 text-gray-600 text-center p-4">{card.price}</h3>
                            <h2 className="font-bold flex text-xl text-center p-4">{card.title}</h2>

                            {/* List Section */}
                            <ul className="list-disc pl-8 space-y-4 text-gray-500 font-semibold text-sm sm:text-base md:text-lg">
                                <li>{card.listOne}</li>
                                <li>{card.listTow}</li>
                                <li>{card.listThree}</li>
                                <li>{card.listFour}</li>
                            </ul>

                            {/* Button */}
                            <div className="text-center p-7">
                                <button className="bg-blue-500 text-white p-2 w-36 font-semibold rounded-lg hover:bg-blue-600 transition">
                                    {card.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Pricing;
