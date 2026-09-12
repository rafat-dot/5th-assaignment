import { use } from "react";
interface TecnologyProps{
    technologiesPromise:Promise<Technology[]>
}

const Tecnologies = ({technologiesPromise}:TecnologyProps) => {
    console.log(technologiesPromise);
    const tecnologies =use(technologiesPromise)
    console.log(tecnologies);
    return (
        <div>
            
        </div>
    );
};

export default Tecnologies;