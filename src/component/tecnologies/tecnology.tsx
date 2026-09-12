import type { Technology } from "../../type/tecnologytype";
import TechnologyCard from "../tecnology-card";

interface TecnologyProps {
  tecnologies: Technology[];
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
}

const Tecnology = ({ tecnologies ,stack,onAddToStack}: TecnologyProps) => {
  return (
   <>
    <TechnologyCard technologies={tecnologies} 
  stack={stack}
  onAddToStack={onAddToStack}
    />
   </>
  );
};

export default Tecnology;
