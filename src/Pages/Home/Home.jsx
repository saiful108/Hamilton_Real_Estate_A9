import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            {/* title */}
            <Helmet>
        <title>Hamilton Real Estate | Home</title>
            </Helmet>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;