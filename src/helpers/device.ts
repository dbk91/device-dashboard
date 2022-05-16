import type { Device } from "../types";

export const isRequested = (device: Device) =>
  typeof device.status === "undefined" || device.status === "requested";
export const isPurchased = (device: Device) => device.status === "purchased";
export const isShipped = (device: Device) => device.status === "shipped";
export const isInstalled = (device: Device) => device.status === "installed";
export const getDeviceName = (device: Device) => device.name;
