import { CarCondition } from "@/api/Slices/garage/types";
import { RaceType } from "../../Store/Use-winner-store";
import CarIcon from "./Car-icon";
import useCarAnimation from "../../Hooks/Use-car-animation";
import { Car as CarEntity } from "@/api/Slices/garage/entity";
import { useManageCar } from "../../Hooks/Use-manage-car.hook";

interface Props {
    car: CarEntity;
    winnerId: number | null;
    announceWinner: (id: number) => void;
    raceType: RaceType | null;
}


export default function Car({ car, winnerId, announceWinner, raceType }: Props) {
    const { carCondition, carReachTheEnd, handlePosition } = useManageCar({ id: car.id, winnerId, announceWinner, raceType });

    const { carRef } = useCarAnimation({
        initialPosition: car.position,
        speed: car.engine.velocity,
        status: car.engine.status,
        condition: carCondition || CarCondition.running,
        onReachTheEnd: carReachTheEnd,
        handlePosition
    })

    return (
        <div ref={carRef} className="w-fit">
            <CarIcon color={car.color} />
        </div>
    );
}