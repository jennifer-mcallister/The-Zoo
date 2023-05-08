import { useEffect, useState } from "react";

export interface ITime {
    startDate: Date
}


export const useTimer = ({startDate}: ITime) => {
    const date = new Date(startDate).getTime();
    const [timeLeft, setTimeleft] = useState({h: 0, min: 0})
    const [timeCount, setTimeCount] = useState( new Date().getTime() - date );

    useEffect (() => {
        const count = setInterval (() => {
            setTimeCount(new Date().getTime() - date )
            const hours = Math.floor(
                (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeCount % (1000 * 60 * 60)) / (1000 * 60)
            );
            setTimeleft({...timeLeft, h: hours, min: minutes})
        }, 1000);

        return () => clearInterval(count);
    }, [timeCount]);

    return timeLeft;
}


