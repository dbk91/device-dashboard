import * as React from "react";
import { useParams } from "react-router-dom";

import { useDeviceData } from "../../hooks/useDeviceData";

export function DeviceInfo() {
  const { deviceId } = useParams();
  const { data, isLoading } = useDeviceData();

  const currentDevice = React.useMemo(() => {
    if (!isLoading) {
      return data.find((device) => device.id.toString() === deviceId);
    }
  }, [data, isLoading, deviceId]);

  return isLoading ? (
    <h5 className="text-center">Loading...</h5>
  ) : (
    <div className="w-64 mx-auto bg-white rounded-md p-4">
      <div className="divide-y divide-slate-300">
        <h3 className="font-bold pb-2">{currentDevice.name}</h3>
        <div className="pt-2">
          <div className="flex justify-between">
            <span className="opacity-50">Device Type</span>
            <span>{currentDevice.type}</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="opacity-50">Status</span>
            <span>{currentDevice.status ?? "Requested"}</span>
          </div>
        </div>
        <div className="pt-2">
          {currentDevice.changeEvents.length === 0 ? (
            <p>No change events found.</p>
          ) : (
            <ul className="max-h-72 overflow-y-auto">
              {currentDevice.changeEvents.map((event) => (
                <li key={event.id}>
                  Moved to "{event.to}" from "{event.from ?? "requested"}" on{" "}
                  {event.datetime.toLocaleString()}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
