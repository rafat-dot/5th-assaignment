
import type { Technology } from "../type/tecnologytype";

interface TechnologyCardProps {
  technologies: Technology[];
}

const TechnologyCard = ({ technologies }: TechnologyCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">

      {technologies.map((technology) => (
        <div
          key={technology.id}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
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
          <h3 className="text-2xl font-bold text-[#111827] mb-3">
            {technology.name}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-base leading-7 min-h-21">
            {technology.description}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 my-5"></div>

          {/* Information */}
          <div className="flex items-center justify-between text-sm mb-5">

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
            className="w-full bg-[#080D1A] hover:bg-[#151c2d] text-white py-3 rounded-lg font-medium transition"
          >
            Add to Stack
          </button>
        </div>
      ))}

    </div>
  );
};

export default TechnologyCard;


