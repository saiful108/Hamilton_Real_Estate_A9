import { Helmet } from "react-helmet-async";
import Slider from "../../Componets/Slider";
import Estate from "../../Componets/Estate";


const Home = () => {
    return (
        <div>
            {/* title */}
            <Helmet>
        <title>Hamilton Real Estate | Home</title>
            </Helmet>
           <Slider></Slider>
           <Estate></Estate>
        </div>
    );
};

export default Home;