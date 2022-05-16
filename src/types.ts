export interface Device {
  name: string;
  type: "SWITCH" | "LOCK" | "DIMMER" | "THERMO";
  state?: "on" | "off";
  codes?: string[];
  locked?: boolean;
  temp?: number;
  level?: number;
  mode?: "AUTO";
}
