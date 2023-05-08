import { useLoaderData, useParams } from "react-router";
import { IAnimal } from "../models/IAnimal";
import "./AnimalView.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Animal } from "../components/Animal";
import { IAnimalsResponse } from "../models/IAnimalsResponse";
import { Link } from "react-router-dom";
import { Notis } from "../components/Notis";

export const AnimalView = () => {
    const params = useParams();
    const [animals, setAnimals] = useState([] as IAnimal[]);
    const LS = JSON.parse(localStorage.getItem("animals") || "[]");
    const currentAnimal = animals.find((animal) => animal.id.toString() === params.id);
    
    const updateAnimals = async () => {
        if (LS.length === 0) {
            console.log("fetching data")
            const response = await axios.get<IAnimalsResponse[]>(
                "https://animals.azurewebsites.net/api/animals"
            );
            localStorage.setItem("animals", JSON.stringify(response.data))
            setAnimals(JSON.parse(localStorage.getItem("animals") || "[]") as IAnimal[])
        } else {
            setAnimals(JSON.parse(localStorage.getItem("animals") || "[]") as IAnimal[])
        }
    }

    useEffect(() => {
            updateAnimals();
    }, [])
    
    if (currentAnimal) { 
        return (
            <>
            <div className="notis-container">
            {animals.map((a, index) => (
                <div key={index}>
                    <Notis animal={a}></Notis>
                </div>
            ))}
            </div>
            <div className="animalview-content">
                <Animal animal={currentAnimal} allAnimals={animals} fullView={true}></Animal>
            </div>
            </>
        )
    } else {
        return (
            <>
                <p>Hmmm... we could not find the animal you are looking for</p>
            </>
        )

    }
}