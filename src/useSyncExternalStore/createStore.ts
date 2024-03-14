import { Type } from "./types";

export default function createStore(initState: Type) {
  let currentState = initState;
  const listeners = new Set<(state: Type) => void>();
  return {
    getState: () => currentState,
    setState: (state: Type) => {
      currentState = state;
      listeners.forEach((listener) => listener(state));
    },
    subscribe: (listener: (state: Type) => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
