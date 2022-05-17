import * as React from "react";
import useSWR from "swr";

import sampleData from "../data/devices.json";

import type { Device } from "../types";

async function getDevices(): Promise<Device[]> {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  return sampleData.devices.map((device) => ({
    ...device,
    changeEvents: [],
  })) as Device[];
}

export function useDeviceData() {
  const isPaused = React.useRef<() => boolean>(() => false);
  const { data, error, mutate } = useSWR<Device[]>("devices", getDevices, {
    // For simulated persisted data
    isPaused: () => isPaused.current(),
  });

  React.useEffect(() => {
    isPaused.current = () => typeof data !== "undefined";
  }, [data]);

  const isLoading = typeof data === "undefined" && typeof error === "undefined";

  return {
    data,
    error,
    mutate,
    isLoading,
  };
}
