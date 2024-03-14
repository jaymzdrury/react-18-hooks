import React from "react";
import { store } from "./store";
import { Type } from "./types";

export default function useStore(selector = (state: Type) => state) {
  return React.useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
}
