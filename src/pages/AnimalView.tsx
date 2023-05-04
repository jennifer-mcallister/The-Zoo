import { useLoaderData, useParams } from "react-router";
import { IAnimal } from "../models/IAnimal";
import { Animal } from "../components/Animal";

export const AnimalView = () => {
    const params = useParams();
    const animals = useLoaderData() as IAnimal[];
    const currentAnimal = animals.find((animal) => animal.id.toString() === params.id);

    if(currentAnimal) {
        return <Animal {...currentAnimal} showprofil={true}></Animal>
    } else {
        return <p>Hmm.. we could not find the animal you are looking for.</p>
    }

}