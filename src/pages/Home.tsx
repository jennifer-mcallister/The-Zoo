import { useLoaderData } from "react-router"
import { Animal } from "../components/Animal";
import { IAnimal } from "../models/IAnimal";
import { Link } from "react-router-dom";


export const Home = () => {

    const animals= useLoaderData() as IAnimal[];

    return (
        <>
            <h1>Homepage</h1>
            {animals.map((animal) => 
            <Link key={animal.id} to={`${animal.id}`}>
                 <Animal  {...animal} showprofil={false}></Animal>
            </Link>
            )}
        </>
    )
}