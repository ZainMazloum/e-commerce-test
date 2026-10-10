import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,   // client
    () => false   // server and hydration render
  );
}