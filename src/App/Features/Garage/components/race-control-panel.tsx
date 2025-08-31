
import React, { useCallback } from "react";
import useGenerateCars from "../Hooks/Use-generate-cars.hook";
import CreateCar from "./Garage-actions/Car-actions/Create-car";
import useManageRace from "../Hooks/Use-manage-race.hook";
import Button from "../../../../common/components/Button/Button";
import Modal from "../../../../common/components/Modal/Modal";
import { useBoolean } from "../../../../common/Hooks/Index.hook";

function RaceControlPanel() {
  const { canReset, handleAllCarsEngineActions, raceType, resetCars } = useManageRace();
  const { generateCars } = useGenerateCars();
  const { value, setTrue, setFalse } = useBoolean();

  const startRace = useCallback(async () => {
    await handleAllCarsEngineActions();
  }, [handleAllCarsEngineActions]);

  const resetRace = useCallback(async () => {
    await resetCars();
  }, [resetCars]);

  return (
    <div className="flex flex-row py-4 items-center px-16">
      <div className="flex flex-row space-x-6">
        <div>
          <Button disabled={!!raceType} icon="start-race" onClick={startRace}>
            Start Race
          </Button>
        </div>
        <div>
          <Button onClick={resetRace} disabled={!canReset} icon="reset">
            Reset
          </Button>
        </div>
        <div>
          <Button onClick={setTrue} icon="create">
            Create
          </Button>
        </div>
      </div>
      <div className="flex flex-1 flex-row items-center justify-end">
        <div>
          <Button onClick={generateCars} disabled={!!raceType} icon="random">
            Generate Cars
          </Button>
        </div>
      </div>
      <Modal isOpen={value}>
        <CreateCar onClose={setFalse} />
      </Modal>
    </div>
  );
}

export default RaceControlPanel;
