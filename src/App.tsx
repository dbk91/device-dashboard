import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppBar } from "./components/AppBar";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { useDeviceData } from "./hooks/useDeviceData";

import * as deviceHelpers from "./helpers/device";

export function App() {
  const { isLoading, data: devices } = useDeviceData();

  return (
    <div>
      <AppBar />
      <main className="h-screen container mx-auto pt-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="columns-4 h-full">
            <Column title="Requested">
              {devices.filter(deviceHelpers.isRequested).map((device) => (
                <Card primaryText={device.name} />
              ))}
            </Column>
            <Column title="Purchased">
              {devices
                .filter(deviceHelpers.isPurchased)
                .map(deviceHelpers.getDeviceName)}
            </Column>
            <Column title="Shipped">
              {devices
                .filter(deviceHelpers.isShipped)
                .map(deviceHelpers.getDeviceName)}
            </Column>
            <Column title="Installed">
              {devices
                .filter(deviceHelpers.isInstalled)
                .map(deviceHelpers.getDeviceName)}
            </Column>
          </div>
        )}
      </main>
    </div>
  );
}
