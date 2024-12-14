const cards = [
    {
        imgUrl1: "./public/images/blog-01.jpg",
        title: "Meet AutoManage, the best AI management tools",
        description: "Lorem Ipsum is simply dummy text of the printing and industry.",
        button: "Dec 22, 2023",
    },
    {
        imgUrl1: "./public/images/blog-02.jpg",
        title: "How to earn more money as a wellness coach",
        description: "Lorem Ipsum is simply dummy text of the printing and industry.",
        button: "Mar 15, 2023",
    },
    {
        imgUrl1: "./public/images/blog-03.jpg",
        title: "The no-fuss guide to upselling and cross-selling",
        description: "Lorem Ipsum is simply dummy text of the printing and industry.",
        button: "Jan 25, 2023",
    },
];

function OurBlog() {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="text-center space-y-3 mt-20 mb-10">
                    <h4 className="text-blue-700 text-lg">Our Blog</h4>
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Our Recent News</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {cards.map((card, index) => (
                        <div key={index} className="justify-center">
                            <img className="rounded-lg w-full h-48 object-cover" src={card.imgUrl1} alt={card.title} />
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded font-semibold">{card.button}</button>
                            <h2 className="font-bold text-xl mt-4">{card.title}</h2>
                            <p className="text-gray-600 mt-3">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default OurBlog;
