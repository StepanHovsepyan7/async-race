import useCars from "../../Hooks/Use-cars-hook";
import Car from "../Car/Car";
import GarageActions from "../Garage-actions/Garage-actions";
import Track from "./Track";




function RaceTrack() {
  const { cars, loading } = useCars();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      {cars.map(car => (
        <Track key={car.id}>
          <GarageActions id={car.id} engineStatus={car.engine.status}>
            <div className="w-full relative">
              <div className="absolute left-[200px] z-10">{car.condition}</div>
              <Car
                car={car}
                winnerId={null}
                announceWinner={() => {}}
                raceType={null}
              />
            </div>
          </GarageActions>
        </Track>
      ))}
    </div>
  );
}

export default RaceTrack;