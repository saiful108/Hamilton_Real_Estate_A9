import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <section className="ezy__httpcodes9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
             <Helmet>
        <title>Hamilton Real Estate | Error</title>
            </Helmet>
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center text-center">
                <div className="w-full">
                    <div
                        className="bg-cover bg-no-repeat bg-bottom min-h-[300px] rounded-2xl"
                        style={{
                            backgroundImage:
                                "url(https://cdn.easyfrontend.com/pictures/httpcodes/https9.jpg)",
                        }}
                    ></div>
                </div>
                <div className="w-full pt-12">
                    <h1 className="text-[32px] font-bold leading-none md:text-[40px] mb-4">
                        Oh no! Error 404
                    </h1>
                    <p className="text-lg opacity-80">
                        {/* Something went wrong, this page is broken. */}
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <div className="flex justify-center mt-6">
                        <button className="px-6 py-2.5 font-medium bg-blue-600 hover:bg-opacity-90 rounded text-white duration-300">
                            Go Home
                        </button>
                        <button className="px-6 py-2.5 font-medium border border-blue-600 hover:bg-blue-600 rounded text-blue-600 hover:text-white duration-300 ml-2">
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;