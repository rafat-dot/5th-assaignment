import { use } from "react";
import Tecnology from "./tecnology";
import type { Technology } from "../../type/tecnologytype";

interface TecnologyProps {
  technologiesPromise: Promise<Technology[]>;
}

const Tecnologies = ({ technologiesPromise }: TecnologyProps) => {
  const tecnologies = use(technologiesPromise);

  return (
    <section className="container mx-auto px-4 py-10">

      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-gray-500 text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Technology Cards */}
      <Tecnology tecnologies={tecnologies} />

    </section>
  );
};

export default Tecnologies;