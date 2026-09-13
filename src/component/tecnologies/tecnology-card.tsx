
import type { Technology } from "../../type/tecnologytype";

interface TechnologyCardProps {
  technologies: Technology[];
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
}

const TechnologyCard = ({ technologies,stack, onAddToStack }: TechnologyCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

      {technologies.map((technology) => {
        const isAdded = stack.some((item) => item.id === technology.id);
        return <div
          key={technology.id}
         className="bg-white border border-gray-200 rounded-2xl sm:p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
        >
          {/* Top section */}
          <div className="flex items-start justify-between mb-6">

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Badge */}
            <span className="bg-blue-50 text-sky-500 border border-blue-100 px-4 py-1.5 rounded-full text-sm font-medium">
              {technology.badge}
            </span>

          </div>

          {/* Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3 sm:mb-3">
            {technology.name}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed sm:leading-7 min-h-0 sm:min-h-21">
            {technology.description}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 sm:my-5"></div>

          {/* Information */}
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm mb-4 sm:mb-5  ">

            <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-md">
              {technology.category}
            </span>

            <span className="text-gray-500">
              {technology.difficulty}
            </span>

            <span className="flex items-center gap-1 text-gray-700">
              <span className="text-yellow-400 text-lg">★</span>
              {technology.rating}
            </span>

          </div>

          {/* Button */}
          <button
          disabled={isAdded}
          onClick={() => onAddToStack(technology)}

          className={`w-full py-3 rounded-lg font-medium transition ${
    isAdded
      ? "bg-emerald-600 text-white cursor-not-allowed"
      : "bg-[#080D1A] hover:bg-[#151c2d] text-white cursor-pointer"
  }`}
          >
           {isAdded ? 'Added to Stack' : 'Add to Stack'}
          </button>
        </div>;
      })}

    </div>
  );
};

export default TechnologyCard;


