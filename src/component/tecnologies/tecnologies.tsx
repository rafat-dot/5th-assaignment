import { use, useState } from "react";
import Tecnology from "./tecnology";
import type { Technology } from "../../type/tecnologytype";
import Stack from "./stack";
import { toast } from "react-toastify";
interface TecnologyProps {
  technologiesPromise: Promise<Technology[]>;
}

const Tecnologies = ({ technologiesPromise }: TecnologyProps) => {
  const tecnologies = use(technologiesPromise);
    const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
      toast.success(`${tech.name} added to your stack!`);
    }
  };

  const handleRemoveFromStack = (id: string | number) => {
    const itemToRemove = stack.find((item) => item.id === id);

    setStack((currentStack) => currentStack.filter((item) => item.id !== id));

    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from stack`);
    }
  };

  const handleClearAll = () => {
    setStack([]);
    toast.warn("All technologies removed from stack!");
  };

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
     <div className="flex gap-6 items-start">
        <div className="grow">
          <Tecnology
            tecnologies={tecnologies}
            stack={stack}
            onAddToStack={handleAddToStack}
          />
        </div>

        <Stack stack={stack} onRemoveFromStack={handleRemoveFromStack} onClearAll={handleClearAll}/>
      </div>

    </section>
  );
};

export default Tecnologies;