import type { Technology } from "../../type/tecnologytype";
import TechnologyCard from "../tecnology-card";

interface TecnologyProps {
  tecnologies: Technology[];
}

const Tecnology = ({ tecnologies }: TecnologyProps) => {
  return (
   <>
    <TechnologyCard technologies={tecnologies} />
   </>
  );
};

export default Tecnology;
