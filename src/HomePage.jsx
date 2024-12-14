import Brilliant from "./Play/Brilliant";
import Features from "./Play/Features";

import What from "./Play/What";
import Pricing from "./Play/Pricing";
import Open from "./Play/Open";
import Navebar from "./Play/Navebar";
import Testimonalis from "./Play/Testimonalis";
import AFQ from "./Play/FAG";
import OurTeam from "./Play/OurTeam";
import OurBlong from "./Play/OurBlong";
import Lets from "./Play/Lets";
import Footer from "./Play/Footer";
import DarkMood from "./Play/darkmood/DarkMood";





function HomePage() {
    return(
        <>
      
       <Navebar />
       <Open />
     <Features />
     <Brilliant />
     <What />
     <Pricing />
     <Testimonalis />
     <AFQ />
     <OurTeam />
     <OurBlong />
     <Lets />
     {/* <Form /> */}
     <Footer />
     <DarkMood />
        </>
    )
}
export default HomePage;