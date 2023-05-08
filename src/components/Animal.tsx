import { SyntheticEvent, useEffect, useState } from "react"
import { IAnimal } from "../models/IAnimal"
import "./Animal.css";
import { useTimer } from "../hooks/useTimer";

export interface IAnimalProps {
    animal: IAnimal
    allAnimals: IAnimal[]
    fullView: boolean
}

const placeholder = "src/assets/unkown-animal.jpg";

export const Animal = ({animal, allAnimals, fullView}: IAnimalProps) => {
    
    const [currentAnimal, setAnimal] = useState({...animal});
    const timer = useTimer({startDate: currentAnimal.lastFed});

    const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = placeholder;
    }

    const handleClick = () => {
        const date = new Date();
        setAnimal({...currentAnimal, isFed: true, lastFed: date})
        const animals = [...allAnimals]
        animals.map((a) => {
            if (a.id === animal.id) {
                return (
                    a.isFed = true,
                    a.lastFed = date
                )
            } else {
                return a;
            }
        })
        localStorage.setItem("animals", JSON.stringify(animals));
    }

    useEffect(() => {
        if(timer.h >= 3) {
            setAnimal({...currentAnimal, isFed: false})
            console.log("more then  minute")
            const animals = [...allAnimals]
            animals.map((a) => {
                if(a.id === animal.id) {
                    a.isFed = false
                } else {
                    return a
                }
            })
            
            localStorage.setItem("animals", JSON.stringify(animals))
        }
    }, [timer.min])

    if (fullView) {
        return (
           <>
            <div className="animal-container__profile">
                <h2>{currentAnimal.name}</h2>
                <div className="image-container">
                    <div className={currentAnimal.isFed ? "full" : "hungry" }></div>
                    <img src={currentAnimal.imageUrl} onError={handleError}></img>
                </div>
                <p>{currentAnimal.longDescription}</p>
            </div>
            <div>
                <p>{currentAnimal.lastFed.toString()}</p>
                <button type="button" disabled={currentAnimal.isFed} onClick={handleClick}>Feed</button>
            </div>   
           </>
        )
    } else {
        return (
            <div className="animals-container">
                    <div className="animal-container">
                        <h2>{currentAnimal.name}</h2>
                        <div className="image-container">
                            <div className={currentAnimal.isFed ? "full" : "hungry" }></div>
                            <img src={currentAnimal.imageUrl} onError={handleError}></img>
                        </div>
                        <p>{currentAnimal.shortDescription}</p> 
                    </div>   
            </div>
        )
    }
}