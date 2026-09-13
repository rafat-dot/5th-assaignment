
import banner from '../assets/banner-stack.png';

const Bannerr = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left    ">

            {/* Left Side */}
            <div className="flex flex-col items-center md:items-start gap-6 sm:gap-8">

                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Build Your Ideal <br className='hisdden sm:inline' />

                    <span className="font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

              
                <div className="flex gap-4">
                    <button className="w-full sm:w-auto bg-linear-to-r from-[#FF5722] to-[#7C3AED] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base cursor-pointer">
                        Explore Technologies
                    </button>

                    <button className="w-full sm:w-auto border border-[#D81B7E] text-[#D81B7E] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-[#D81B7E] hover:text-white transition-all duration-300 text-sm sm:text-base cursor-pointer">
                        Learn More
                    </button>
                </div>

            </div>

            {/* Right Side */}
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-125 object-contain">
                <img
                    src={banner}
                    alt="Development Stack"
                    className="w-full max-w-md mx-auto md:mx-0"
                />
            </div>

        </div>
    );
};

export default Bannerr;