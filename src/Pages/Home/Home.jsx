import { Helmet } from "react-helmet-async";
import Slider from "../../Componets/Slider";


const Home = () => {
    return (
        <div>
            {/* title */}
            <Helmet>
        <title>Hamilton Real Estate | Home</title>
            </Helmet>
           <Slider></Slider>
        </div>
    );
};

export default Home;