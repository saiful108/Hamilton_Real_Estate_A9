import { FaLandmark, FaLocationDot, FaPhone } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { useLoaderData, useParams,} from "react-router-dom";


const Estate_Details = () => {
    const estates=useLoaderData();
  
   let {idx}=useParams();
   const property=estates.find(estate=>estate.id===parseInt(idx));
  const {estate_title,image_url,segment_name,description,price,Status,Area,location,facilities,owner_phone}=property;
    return (
        <div>
           
        <section className="ezy__contents8 light pb-14 md:pb-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div
				className="h-[800px] w-full bg-top bg-cover bg-no-repeat relative"
				style={{
					backgroundImage:
						`url(${image_url})`,
				}}
			>
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50" />
			</div>
			<div className="container px-5 mt-12">
				<div className="grid grid-cols-12">
					<div className="col-span-12 md:col-span-8 md:col-start-3">
					<h1 className="font-black text-4xl text-violet-900">{estate_title}
                    <div className="badge badge-secondary px-5 py-3 font-light text-lg">{Status}</div>
                    </h1>
                    <div className=" my-3 flex items-center font-bold text-xl text-slate-500 gap-5">
                     <FaLocationDot />{location}
                     </div>
                    <h2 className="my-5">
                      <span className="bg-[#20785c] font-bold text-xl shadow-lg rounded-lg text-white  px-5 py-2"> {segment_name}</span>
                                             </h2>
                                             <h1 className="my-2 font-bold text-lg text-[#561d88]  ">Facilities</h1>

                                             <div className="grid grid-cols-3 justify-evenly">
                                             {
                            facilities.map((service,idx)=><div key={idx}>
                                <p className="font-semibold text-slate-500 text-lg">{service}</p>
                            </div>)
                        }
                                             </div>

                                             <div className=" my-3 flex items-center font-bold text-xl text-slate-500 gap-5">
                                             <FaLandmark /> Area: {Area}
                     </div>
                     <p className="text-base font-medium text-gray-600"><span className="font-semibold">Description:</span>{description}</p>
                   
                    <div className=" my-3 flex items-center font-bold text-xl text-violet-800 gap-5">
                    <span className="text-red-700"> <ImPriceTag /></span> Price: <span>{price}</span>
                     </div>
                                             
                          <div className="flex sm:flex- lg:flex md:flex gap-5">
                            <h1 className="btn">Get Phone No </h1>
                          
                            <h1 className='btn'> Call Owner</h1>
                            <p className="btn"><FaPhone />{owner_phone}</p>
                            
                            </div>                  

					</div>
				</div>
			</div>
		</section>
        </div>
    );
};

export default Estate_Details;