import useSWR from "swr";
import { nanoid } from "nanoid";

import sampleData from "../data/devices.json";

import type { Device } from "../types";

async function getDevices(): Promise<Device[]> {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1e3));
  return sampleData.devices.map((device) => ({
    ...device,
    id: nanoid(),
  })) as Device[];
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
