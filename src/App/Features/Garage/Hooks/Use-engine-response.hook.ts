import Api from "@/api";
import { EngineStatus } from "@/api/Slices/engine/types";
import { useCallback } from "react";
import { Callbacks } from "./Use-cars-response.hook";

export default function useEngineResponse() {
  const patchCarEngine = useCallback(
    async ({
      id,
      status,
      callbacks
    }: {
      id: number;
      status: EngineStatus.started | EngineStatus.stopped;
      callbacks: Callbacks;
    }) => {
      callbacks.beforeAPICall?.();
      const rsp = await Api.engine.PatchCarEngine({ id, status });
      callbacks.afterAPICall?.();
      if (rsp.meta.error) {
        return {
          error: rsp.meta.error,
          data: null
        };
      }

      return {
        error: null,
        data: rsp.data
      };
    },
    []
  );

  const patchEngineStatus = useCallback(async ({ id, callbacks }: { id: number; callbacks: Callbacks }) => {
    callbacks.beforeAPICall?.();
    const rsp = await Api.engine.PatchEngineStatus({ id, status: EngineStatus.drive });
    callbacks.afterAPICall?.();
    if (rsp.meta.error) {
      return {
        error: rsp.meta.error,
        data: null
      };
    }

    return {
      error: null,
      data: rsp.data
    };
  }, []);

  return { patchCarEngine, patchEngineStatus };
}
