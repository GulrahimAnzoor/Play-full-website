function Brilliant() {
    return (
        <>
            <section className="bg-[rgb(249,250,251)] mt-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center">
                        {/* Text Section */}
                        <div className="Toolkit lg:w-[45%] w-full mt-12 lg:mt-24 ">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
                                Brilliant Toolkit to Build <br /> Nextgen Website Faster.
                            </h1>
                            <p className="mt-4 font-medium text-slate-600 text-sm sm:text-base md:text-lg">
                                The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications
                                with interactive panel discussions and roundtables led by subject matter experts.
                                <br />
                                <br />
                                The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.
                            </p>
                            <button className="btn btn-primary mt-4 w-32 sm:w-40 md:w-48 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                                Know More
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="Group_img lg:w-[48%] w-full mt-12 lg:mt-24 mb-24">
                            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10">
                                {/* First Image */}
                                <img
                                    className="lg:w-[46%] md:w-[45%] sm:w-[21rem] h-[30rem] object-cover rounded-lg"
                                    src="./public/images/about-image-01 (1).jpg"
                                    alt="Toolkit"
                                />

                                {/* Second Image and Info Box */}
                                <div className="lg:w-[46%]  flex flex-col gap-6">
                                    <img
                                        className="h-[19rem] sm:w-[21rem] object-cover rounded-lg"
                                        src="./public/images/about-image-02 (1).jpg"
                                        alt="Experience"
                                    />
                                    <div className="lg:w-[100%] sm:w-[21rem] rounded-md h-40 border p-3 bg-blue-400 flex flex-col justify-center text-white">
                                        <h3 className="font-bold ml-4 mt-3 text-xl sm:text-2xl">09</h3>
                                        <h5 className="ml-4 text-lg sm:text-xl">We have</h5>
                                        <h6 className="ml-4 text-sm sm:text-base">Years of experience</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Brilliant;
