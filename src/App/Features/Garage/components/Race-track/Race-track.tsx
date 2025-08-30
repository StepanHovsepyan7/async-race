import useCars from "../../Hooks/Use-cars-hook";
import CarActions from "../Garage-actions/Car-actions/Car-actions";
import Track from "./Track";

function RaceTrack() {
  const { cars, loading } = useCars()
  if (loading) {
    return <div>Loading...</div>
  }
  return (

    <div>
      <Track>
        <p>car</p>
      </Track>
      {cars.map((car)=>{
        return(
          <CarActions id={car.id} key={car.id} engineStatus={car.engine.status}>
            <div>
              {car.name}
            </div>
          </CarActions>
        )
      })}
    </div>
  );
}

export default RaceTrack;