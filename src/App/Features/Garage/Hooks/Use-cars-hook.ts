import { useCallback, useEffect, useState } from "react";
import { useCarsResponse } from "./Use-cars-response.hook";
import useGarageStore from "../Store/Usa-garage-store";
import { EngineStatus } from "../../../../api/Slices/engine/types";

const limit = 9;

export default function useCars() {
  const { cars, setCars, setCarsCount, carsCount, setActivePage, activePage } =
    useGarageStore((state) => ({
      cars: state.cars,
      setCars: state.setCars,
      setCarsCount: state.setCarsCount,
      carsCount: state.carsCount,
      setActivePage: state.setActivePage,
      activePage: state.activePage,
    }));

  const [hasInitializedStore, setHasInitializedStore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { getCarsResponse } = useCarsResponse();

  const getCars = useCallback(
    async (page: number = 1) => {
      const rsp = await getCarsResponse({
        page,
        limit,
        callbacks: {
          beforeAPICall: () => setLoading(true),
          afterAPICall: () => setLoading(false),
        },
      });

      if (rsp.error) {
        setError(rsp.error.message);
        return;
      }

      if (rsp.data) {
        const normalizedCars = rsp.data.items.map((car) => ({
          ...car,
          engine: car.engine
            ? {
                status: car.engine.status as EngineStatus,
                velocity: car.engine.velocity ?? 0,
                distance: car.engine.distance ?? 0,
              }
            : { status: EngineStatus.stopped, velocity: 0, distance: 0 },
          position: car.position ?? 0,
        }));

        setCars({
          ...cars,
          [page.toString()]: normalizedCars,
        });

        setCarsCount(rsp.data.length);
        setActivePage(page);
      }
    },
    [getCarsResponse, setCars, cars, setCarsCount, setActivePage]
  );

  const reloadOnCreate = useCallback(() => {
    getCars(activePage);
  }, [getCars, activePage]);

  useEffect(() => {
    if (!hasInitializedStore && typeof window !== "undefined") {
      setHasInitializedStore(true);
    }
    if (hasInitializedStore && !cars[activePage]?.length) {
      getCars(activePage);
    }
  }, [getCars, cars, hasInitializedStore, activePage]);

  const pagesLength = Math.floor(carsCount / limit) + 1;

  return {
    cars: cars[activePage] || [],
    activePage,
    setActivePage,
    loading,
    carsCount,
    error,
    reloadOnCreate,
    pagesLength,
  };
}
