import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";


function Features() {
  const cards = [
    {
      title: "Free and Open-Source",
      discription: "Lorem Ipsum is simply dummy text of the printing and industry.",
      imgUrl: img1,
      button: "Learn More",
    },
    {
      title: "Multipurpose Template",
      discription: "Lorem Ipsum is simply dummy text of the printing and industry.",
      imgUrl: img2,
      button: "Learn More",
    },
    {
      title: "High-quality Design",
      discription: "Lorem Ipsum is simply dummy text of the printing and industry.",
      imgUrl: img3,
      button: "Learn More",
    },
    {
      title: "All Essential Elements",
      discription: "Lorem Ipsum is simply dummy text of the printing and industry.",
      imgUrl: img4,
      button: "Learn More",
    }
  ];
    return (
        <>
          <div className="text-center font-sans mt-28">
            <h4 className="text-blue-600">Feature</h4>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Main Features Of Play</h1>
            <p className="font-medium text-slate-500 mt-3 text-sm sm:text-base md:text-lg lg:text-xl">
              There are many variations of passages of Lorem Ipsum <br />
              available but the majority have suffered alteration in some form.
            </p>
          </div>

          {/* Cards Container */}
          <div className="container mx-auto px-4 mt-12 flex flex-wrap justify-center gap-2 md:gap-12 lg:gap-16">
            {cards.map((card, index) => (
              <div className="w-full sm:w-[20rem] md:w-[18rem] lg:w-[22rem] xl:w-[19rem] bg-white p-6 " key={index}>
                <img className="w-16 h-16  mb-4 " src={card.imgUrl} alt={card.title} />
                <h5 className="font-semibold text-xl mb-2">{card.title}</h5>
                <p className="text-slate-500 mb-4">{card.discription}</p>
                {card.button && <button className="font-medium text-start mt-3 text-black hover:text-blue-600">{card.button}</button>}
              </div>
            ))}
          </div>
        </>
    );
}

export default Features;
