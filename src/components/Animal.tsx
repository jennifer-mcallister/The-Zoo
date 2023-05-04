import { ReactEventHandler, SyntheticEvent } from "react";
import { IAnimal } from "../models/IAnimal"
import "./Animal.css";

interface IAnimalProps extends IAnimal {
    showprofil?: boolean;
};

export const Animal = (props: IAnimalProps) => {
    const unkownAnimal = "src/assets/unkown-animal.jpg"

    const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = unkownAnimal;
    }

    return (
        <div className="animal-container">
            <h2>{props.name}</h2>
            <img src={props.imageUrl} onError={handleError} />
            <p>{props.shortDescription}</p>
            
        </div>
    )

}

