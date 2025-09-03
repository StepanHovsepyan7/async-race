import { useMemo } from "react";
import useCars from "../../Hooks/Use-cars-hook";
import Car from "../Car/Car";
import GarageActions from "../Garage-actions/Garage-actions";
import RaceLine from "./Race-line";
import WinnerModal from "../../../../../App/Features/Winner/components/Modal/Winner-modal";
import Modal from "../../../../../common/components/Modal/Modal";
import Pagination from "../../../../../common/components/Pagination/Pagination";
import useAnnounceWinner from "../../Hooks/Use-announce-winner.hook";
import Loading from "../../../../../common/components/Loading-indicator/Loading";

const RaceTrack = () => {
  const { cars, loading, setActivePage, activePage, carsCount, pagesLength } = useCars();
  const { announceWinner, raceType, raceWinnerId, setShowWinner, showWinner, getWinner } = useAnnounceWinner();

  const showPagination = pagesLength > 1;

  const winnerCarName = cars?.find(car => car.id === raceWinnerId)?.name ?? "";
  const winnerCarTime = useMemo(() => {
    if (!raceWinnerId) return "";
    const winner = getWinner(raceWinnerId);
    return winner?.time?.toString() ?? "";
  }, [getWinner, raceWinnerId]);

  const openWinnerModal = showWinner && !!raceWinnerId;

  return (
    <div className="px-10">
      <div className="space-y-2 min-h-[400px] flex flex-col items-center justify-center w-full">
        {loading ? (
          <Loading size={60} />
        ) : (
          cars?.map(car => (
            <GarageActions
              key={`track-${car.id}`}
              id={car.id}
              engineStatus={car.engine?.status ?? "stopped"}
            >
              <RaceLine condition={car.condition ?? "idle"} name={car.name ?? "Unknown"}>
                <Car
                  car={car}
                  announceWinner={announceWinner}
                  winnerId={raceWinnerId}
                  raceType={raceType}
                />
              </RaceLine>
            </GarageActions>
          ))
        )}
      </div>

      <Modal isOpen={openWinnerModal}>
        <WinnerModal
          name={winnerCarName}
          time={winnerCarTime}
          onClose={() => setShowWinner(false)}
        />
      </Modal>

      {showPagination && (
        <Pagination
          onPageChange={setActivePage}
          carsCount={carsCount}
          page={activePage}
          pagesLength={pagesLength}
        />
      )}
    </div>
  );
};

export default RaceTrack;
