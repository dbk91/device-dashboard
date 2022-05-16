export type DeviceStatus = "requested" | "purchased" | "shipped" | "installed";

export interface Device {
  id?: string;
  name: string;
  type: "SWITCH" | "LOCK" | "DIMMER" | "THERMO";
  status?: DeviceStatus;
  state?: "on" | "off";
  codes?: string[];
  locked?: boolean;
  temp?: number;
  level?: number;
  mode?: "AUTO";
}
