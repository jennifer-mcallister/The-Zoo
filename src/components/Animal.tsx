import { IAnimal } from "../models/IAnimal"

interface IAnimalProps extends IAnimal {
    showprofil?: boolean;
};

export const Animal = (props: IAnimalProps) => {
    if (props.showprofil) {
        return (
            <>
                <p>{props.name}</p>
                <p>{props.longDescription}</p>
            </>
        )
    } else {
        return (
            <div>
               <p>{props.name}</p> 
            </div>
        )
    }

}

