import { SyntheticEvent, useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal"
import { useTimer } from "../hooks/useTimer";
import "./Notis.css";

export interface INotisProps {
    animal: IAnimal
}

const placeholder = "src/assets/unkown-animal.jpg";

export const Notis = ({animal}: INotisProps) => {
    const timer = useTimer({startDate: animal.lastFed});
    const [notification, setNotification] = useState(false);

    const handleError = (e: SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = placeholder;
    }
    
    useEffect (() => {
        if(timer.h >= 4) {
            setNotification(true);
        }
        
    }, [timer.min])

    if (notification && !animal.isFed) { return (
        <div className="container">
            <img src={animal.imageUrl} onError={handleError} className="notis-img"/>
            <p>{animal.name}: Mata mig!</p>
        </div>
        )    
    } else {
        return (
            <></>
        )
    }
}
