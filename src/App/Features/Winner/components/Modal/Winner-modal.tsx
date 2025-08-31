import useGarageStore from "@/App/Features/Garage/Store/Usa-garage-store";
import useWinnerStore from "@/App/Features/Garage/Store/Use-winner-store";
import Button from "@/common/components/Button/Button";

interface Props {
  id: number;
  onClose: () => void;
}
function WinnerModal({ id, onClose }: Props) {
  const { winner } = useWinnerStore(state => ({
    winner: state.getWinner(id)
  }));

  const { car } = useGarageStore(state => ({
    car: state.getCar(id)
  }));

  return (
    <div className="bg-white rounded-2xl p-4">
      <h1>WINNER</h1>
      <p>{car?.name}</p>
      <p>{winner?.time}</p>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}

export default WinnerModal;