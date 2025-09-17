import { EngineStatus } from "../../../../api/Slices/engine/types";
import { CarCondition } from "../../../../api/Slices/garage/types";
import { useCallback, useEffect, useRef } from "react";

const increaseSpeed = 1;
const divider = 1000;
const nonEmptyInteger = 0;

export default function useCarAnimation({
  status,
  speed,
  condition,
  initialPosition,
  onReachTheEnd,
  handlePosition
}: {
  status: EngineStatus;
  speed: number;
  condition: CarCondition;
  initialPosition: number;
  onReachTheEnd: (position: number, time: number) => void;
  handlePosition: (position: number) => void;
}) {
  const positionRef = useRef<number>(initialPosition);
  const animationId = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const roadLength = useRef<number>(nonEmptyInteger);
  const isCarStarted = useRef(false);
  const startTimeRef = useRef<number | null>(null); // Track animation start time
  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== null && condition === CarCondition.running) {
        const deltaTime = time - previousTimeRef.current;

        const adjustedSpeed = status === EngineStatus.drive ? speed * increaseSpeed : speed;

        const newPosition = positionRef.current + (adjustedSpeed * deltaTime) / divider;

        positionRef.current = newPosition >= roadLength.current ? roadLength.current : newPosition;

        if (positionRef.current >= roadLength.current) {
          // Use elapsed time since animation started
          const elapsed = startTimeRef.current !== null ? (time - startTimeRef.current) / divider : 0;
          onReachTheEnd(positionRef.current, +elapsed.toFixed(1));
          return;
        }
        if (carRef.current) {
          carRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      if (condition === CarCondition.running) {
        previousTimeRef.current = time;
        animationId.current = requestAnimationFrame(animate);
      }
    },
    [speed, status, onReachTheEnd, condition]
  );

  const handleResize = useCallback(() => {
    if (carRef.current && carRef.current.parentElement) {
      roadLength.current = carRef.current.parentElement.scrollWidth - carRef.current.scrollWidth || nonEmptyInteger;
    }
  }, []);

  useEffect(() => {
    if (carRef.current) {
      carRef.current.style.willChange = "transform";
      carRef.current.style.transition = "transform 0.1s linear";
    }
    if (carRef.current && carRef.current.parentElement) {
      positionRef.current = initialPosition;
      carRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  }, [initialPosition]);

  useEffect(() => {
    if (carRef.current && carRef.current.parentElement) {
      roadLength.current = carRef.current.parentElement.scrollWidth - carRef.current.scrollWidth || nonEmptyInteger;
    }

    window.addEventListener("resize", handleResize);

    if (status !== EngineStatus.stopped) {
      previousTimeRef.current = performance.now();
      if (positionRef.current === initialPosition) {
        startTimeRef.current = previousTimeRef.current;
      }
      animationId.current = requestAnimationFrame(animate);
      if (!isCarStarted.current) {
        handlePosition(1);
        isCarStarted.current = true;
      }
    } else if (animationId.current) {
      if (condition === CarCondition.broken) {
        handlePosition(positionRef.current);
      } else if (positionRef.current < roadLength.current) {
        if (carRef.current) {
          positionRef.current = nonEmptyInteger;
          carRef.current.style.transform = `translateX(0px)`;
        }
      }

      cancelAnimationFrame(animationId.current);
      animationId.current = null;
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [condition, speed, animate, handleResize, status, handlePosition]);

  return { carRef };
}
