import useSWR from "swr";

import sampleData from "../data/devices.json";

import type { Device } from "../types";

async function getDevices(): Promise<Device[]> {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  return sampleData.devices as Device[];
}

export function useDeviceData() {
  const { data, error, mutate } = useSWR<Device[]>("devices", getDevices);
  const isLoading = typeof data === "undefined" && typeof error === "undefined";

  return {
    data,
    error,
    mutate,
    isLoading,
  };
}
