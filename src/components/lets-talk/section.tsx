import React from 'react';
import Button from "../common/Button";

const LetsTalk = () => {
  return (
    
    <div className="min-h-screen flex flex-col p-4">

          <form className="space-y-32 w-full mx-auto  py-4">
            

            <div className="relative
             rounded-lg p-[2px]" style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}>
              
              <span className="absolute left-1 -top-16 text-[60px] w-[40px] h-[60px] md:-left-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:left-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]  font-medium font-space-grotesk text-[#003780]">1.</span>
              <div className="bg-white rounded-lg p-2">
                <input
                  className=" w-full h-[60px] md:w-[800px] md:h-[90px]  lg:w-[1283px] lg:w-h-[116px]   px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606]  placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
                  type="text"
                  placeholder="Organization name"
                />
              </div>
            </div>

         
            <div className="relative rounded-lg p-[2px] " style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}>
              <span className="absolute right-1 -top-16 text-[60px] w-[40px] h-[60px] md:-right-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:right-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]   font-medium  font-space-grotesk  text-[#003780]">2.</span>

              <div className="bg-white rounded-lg p-2">
                <input
                  className="w-full  h-[60px]  md:w-[800px] md:h-[90px] lg:w-[1283px] lg:w-h-[116px]  px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606]  placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
                  type="text"
                  placeholder="Job role(s) you want to recruit for"
                />
              </div>
            </div>

            <div className="relative rounded-lg p-[2px]" style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}>
              <span className="absolute left-1 -top-16 text-[60px] w-[40px] h-[60px] md:-left-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:left-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]    font-medium font-space-grotesk text-[#003780]">3.</span>
              <div className="bg-white rounded-lg p-2">
                <input
                  className="w-full  h-[60px]  md:w-[800px] md:h-[90px] lg:w-[1283px] lg:w-h-[116px]   px-4 bg-transparent focus:outline-none placeholder-[#060606] text-[#060606]  placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium text-[24px]"
                  type="tel"
                  placeholder="Mobile number"
                />
              </div>
            </div>

        
       <div className="relative rounded-lg p-[2px]" style={{ background: 'linear-gradient(45deg, #003780, #f27933)' }}> <span className="absolute right-1 -top-16 text-[60px] w-[40px] h-[60px] md:-right-1 md:-top-18 md:text-[60px]md:w-[65px] md:h-[100px]  lg:right-1 lg:-top-27 lg:text-[100px] lg:w-[72px] lg:h-[128px]  font-bold font-space-grotesk text-[#003780]"> 4. </span>

            <div className="bg-white rounded-lg p-2">
              <input
                className="w-full  h-[60px]  md:w-[800px] md:h-[90px] lg:w-[1283px] lg:w-h-[116px]  px-4 bg-transparent focus:outline-none  placeholder:font-Manrope placeholder:text-[15px] placeholder:font-medium placeholder-[#060606] text-[#060606] text-[24px] "
                type="email"
                placeholder="Email address"
              />
            </div>
          </div>

    
         <div className="flex  items-center justify-center mt-16">
      <Button
        variant="secondary"
        href="/talents"
        className="px-5 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl"
        arrow
      >
        Find your next great hire
      </Button>
    </div>
          </form>
          
          <div className="flex justify-center mt-10 md:mt-16 lg:mt-14">
            <h1 className="bg-gradient-to-r from-[#003780] via-[#763e18] to-[#F27933] bg-clip-text  font-bold font-space-grotesk text-transparent text-[80px] text-center width-[111px] height-[102px]">OR</h1>
          </div>

        <div className="font-bold text-gray-700 text-[24px] font-space text-center mb-2 mt-10 md:mt-8 lg:mt-14">
          <p className='width-[889px] h-[40px]' >Reach out to us via email to book a consultation or for more enquiries</p>
        </div>


          <div className='mb-12 mt-24 md:mt-3 lg:mt-2  '>
          <p className=" width-[444px] h-[38px] bg-gradient-to-r from-[#003780] via-[#763e18] to-[#F27933] bg-clip-text text-transparent  font-semibold font-space text-[30px] text-center  ">info@hirerightng.com</p>
        </div>
        </div>
      
  
  );
};
export default LetsTalk;
