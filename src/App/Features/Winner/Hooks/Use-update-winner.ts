
import { useCallback, useState } from "react";
import useWinnerStore from "../../Garage/Store/Use-winner-store";
import useWinners from "./Use-winners";

export default function useUpdateWinner() {
  const { updateWinner } = useWinners();
  const updateWinnerInStore = useWinnerStore(state => state.updateWinner);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateWinnerAction = useCallback(
    async ({ id, wins, time }: { id: number; wins: number; time: number }) => {
      const response = await updateWinner({
        id,
        wins,
        time,
        callbacks: { beforeAPICall: () => setLoading(true), afterAPICall: () => setLoading(false) }
      });
      if (response.error) {
        setError(response.error.message);
      } else {
        // updateWinnerInStore expects (id, winner)
        updateWinnerInStore(id, response.data!);
      }
    },
    [updateWinner, setLoading, setError, updateWinnerInStore]
  );
  return {
    updateWinnerAction,
    loading,
    error
  };
}