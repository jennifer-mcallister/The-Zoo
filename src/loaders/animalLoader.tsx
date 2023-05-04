import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export interface ILoader {
    animals: IAnimal[]
}

export const animalLoader = async () => {

    const animalsInLS: IAnimal[] = JSON.parse(localStorage.getItem("animals") || "[]");

    if (animalsInLS.length === 0) {
        console.log("fetching data")
        const response = await axios.get<IAnimal[]>(
            "https://animals.azurewebsites.net/api/animals"
        );
        localStorage.setItem("animals", JSON.stringify(response.data));
        const animals: IAnimal[]= JSON.parse(localStorage.getItem("animals") || "")
        return animals;

    } else {
        return animalsInLS;
    }
}
