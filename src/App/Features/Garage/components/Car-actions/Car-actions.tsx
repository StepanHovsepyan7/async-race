import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useGarageStore from "../../Store/Usa-garage-store";
import { EngineStatus } from "@/api/Slices/engine/types";
import IconButton from "@/common/components/Button/Icon-Button";
import UpdateCar from "./Update-car";
import RemoveCar from "./Remove-car";
import Modal from "@/common/components/Modal/Modal";

type ModalType = "update" | "delete";

interface Props{
    id:number;
    engineStatus:string;
}

function CarActions({ id, children }: PropsWithChildren<Props>){
  const [modalType, setModalType] = useState<ModalType | null>(null);
    const car = useGarageStore(state => state.getCar(id))
    const disableActions = !car || car.engine.status !== EngineStatus.stopped || car.position !== 0;
  const handleActions = useCallback((type: ModalType) => {
    if (id) {
      setModalType(type);
    }
  }, [id]);


  const modals = useMemo(
    () => ({
      update: <UpdateCar id={id} onClose={() => setModalType(null)} />,
      delete: <RemoveCar id={id} onClose={() => setModalType(null)} />
    }),
    [id]
  );

  return (
    <div>
      <div className="flex flex-col space-y-2 items-center">
        <IconButton disabled={disableActions} iconSize={16} icon="edit" onClick={() => handleActions("update")} />
        <IconButton disabled={disableActions} iconSize={16} icon="delete" onClick={() => handleActions("delete")} />
      </div>
        <Modal isOpen={!!modalType}>{modals[modalType!]}</Modal>
    </div>
  );

}


export default CarActions;