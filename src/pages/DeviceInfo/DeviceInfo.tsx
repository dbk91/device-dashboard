import { useParams } from "react-router-dom";

import { useDeviceData } from "../../hooks/useDeviceData";

export function DeviceInfo() {
  const { deviceId } = useParams();

  return <p>{deviceId}</p>;
}
