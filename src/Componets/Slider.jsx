// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    
    
   
    return (
        <>
        
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           
        <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/Ssxww2n/1.png")'}}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <button className="btn btn-primary ">Get Started</button> */}
    </div>
  </div>
</div> 
        </SwiperSlide>
        <SwiperSlide>
           
        <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/wpS2Xm5/2.png")'}}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <button className="btn btn-primary ">Get Started</button> */}
    </div>
  </div>
</div> 
        </SwiperSlide>
        <SwiperSlide>
           
           <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/x7JCC5z/3.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
       
        {/* 4 */}
        <SwiperSlide>
           
           <div className="hero min-h-screen px-5" style={{backgroundImage: 'url("https://i.ibb.co/MMPf0Ks/4.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
           {/* 5 */}
           <SwiperSlide>
           
           <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/Bf7YfPb/5.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
           {/* 6 */}
           <SwiperSlide>
           
           <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/rG5FTm9/6.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
           {/* 7 */}
           <SwiperSlide>
           
           <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/sHdgQMp/7.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
           {/* 8 */}
           <SwiperSlide>
           
           <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/b7wm34W/8.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
           {/* 9 */}
           <SwiperSlide>
           
           <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/HrtDRNP/9.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
           {/* 10 */}
           <SwiperSlide>
           
           <div className="hero min-h-screen" style={{backgroundImage: 'url("https://i.ibb.co/WDMQRz9/10.png")'}}>
     <div className="hero-overlay bg-opacity-10"></div>
     <div className="hero-content text-center text-neutral-content">
       <div className="max-w-md">
         {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
         <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
         {/* <button className="btn btn-primary ">Get Started</button> */}
       </div>
     </div>
   </div> 
           </SwiperSlide>
      </Swiper>
      </>
    );
};

export default Slider;