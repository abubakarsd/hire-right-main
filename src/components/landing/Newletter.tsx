
import React from 'react';
import Image from 'next/image'; 
import Button from '../common/Button';


const Newsletter = () => {
  return (
    <section className="w-full bg-white font-montserrat py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-0">
        {/* Left: Text and Form */}
        <div className="flex-1 md:pr-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-space-grotesk">Stay in the loop</h2>
          <p className="font-semibold text-black mb-2">Stay ahead of the Hiring curve!</p>
          <p className="text-black/80 mb-8">Join our newsletter to stay in the loop with all our updates.</p>
          <form className="flex flex-col sm:flex-row items-stretch max-w-xl">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-l-lg rounded-r-lg sm:rounded-r-none bg-[#D9E3F3] text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-primary-blue/40 text-base shadow-md"
              style={{ minWidth: 0 }}
            />
             <Button 
                  variant="secondary"
                  href="/#join-talent"
                  
                  arrow
              className="mt-3 sm:mt-0 sm:ml-2 px-8 py-3 rounded-lg sm:rounded-l-none text-base font-medium shadow-md flex items-center gap-2 cursor-pointer"

                >
                  Subscribe
                </Button>
          </form>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image
            src="/img/landing/news.svg"
            alt="Newsletter illustration"
            width={540}
            height={260}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
