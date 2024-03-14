import { store } from "./store";
import { Type } from "./types";
import useStore from "./useStore";

function UseSyncExternalStore() {
  const useStoreData = useStore((state: Type) => state);

  return (
    <>
      <p>{useStoreData["value"]}</p>
      <button
        onClick={() => {
          const state = store.getState();
          store.setState({
            ...state,
            ["value"]: state["value"] + 1,
          });
        }}
      >
        +
      </button>
    </>
  );
}

export default UseSyncExternalStore;
