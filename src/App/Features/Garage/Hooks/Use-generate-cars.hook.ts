import { useCallback } from "react";
import useCars from "./Use-cars-hook";
import useGarageActions from "./Use-garage-actions";
import { carModels } from "../../../..//lib/constants";


export default function useGenerateCars() {
  const { createCar } = useGarageActions();
  const { reloadOnCreate } = useCars();

  const generateCars = useCallback(async () => {
    const cars = generateRandomCars();
    const actions = cars.map(car =>
      createCar({
        name: car.name,
        color: car.color
      })
    );

    const data = await Promise.all(actions);
    const isThereError = data.some(d => d.error);

    if (!isThereError) {
      reloadOnCreate();
    }
  }, [createCar, reloadOnCreate]);

  return { generateCars };
}

const getRandomCarName = (): string => {
  return carModels[Math.floor(Math.random() * carModels.length)];
};

const getRandomColor = (): string => {
  const hexChars = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateRandomCars = () => {
  const cars = [];
  for (let i = 1; i <= 100; i++) {
    const car = {
      name: getRandomCarName(),
      color: getRandomColor()
    };
    cars.push(car);
  }
  return cars;
};
