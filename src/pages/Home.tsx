import { useLoaderData } from "react-router"
import { Animal } from "../components/Animal";
import { IAnimal } from "../models/IAnimal";
import { Link } from "react-router-dom";
import "./Home.css";


export const Home = () => {

    const animals= useLoaderData() as IAnimal[];

    return (
        <div className="home-content">
            <h1>My Zoo</h1>
            <div className="animals-container">
                {animals.map((animal) => 
                <Link key={animal.id} to={`${animal.id}`}>
                    <Animal  {...animal} showprofil={false}></Animal>
                </Link>
                )}
            </div>
           
        </div>
    )
}