
import banner from '../assets/banner-stack.png';

const Bannerr = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 py-16 flex items-center justify-between gap-10">

            {/* Left Side */}
            <div className="flex flex-col items-start gap-8">

                <h1 className="font-extrabold text-5xl leading-tight">
                    Build Your Ideal <br />

                    <span className="font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                {/* Buttons - পাশাপাশি */}
                <div className="flex gap-4">
                    <button className="bg-linear-to-r from-[#FF5722]  to-[#7C3AED] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                        Explore Technologies
                    </button>

                    <button className="border border-[#D81B7E] text-[#D81B7E] font-semibold px-6 py-3 rounded-xl hover:bg-[#D81B7E] hover:text-white transition-all duration-300">
                        Learn More
                    </button>
                </div>

            </div>

            {/* Right Side */}
            <div>
                <img
                    src={banner}
                    alt="Development Stack"
                    className="w-125"
                />
            </div>

        </div>
    );
};

export default Bannerr;