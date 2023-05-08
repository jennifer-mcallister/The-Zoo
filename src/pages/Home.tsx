import "./Home.css";
import { Animal } from "../components/Animal";
import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { IAnimalsResponse } from "../models/IAnimalsResponse";

export const Home = () => {
    const [animals, setAnimals] = useState(JSON.parse(localStorage.getItem("animals") || "[]") as IAnimal[]);

    const updateAnimals = async () => {
        if (animals.length === 0) {
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
    
    return (
        <div className="home-content">
            <h1>My Zoo</h1>
            {animals.map((a, index)=> (
                <Link key={index} to={a.id.toString()}>
                    <Animal animal={a} allAnimals={animals} fullView={false}></Animal>
                </Link>
            ))}
        </div>
    )
}