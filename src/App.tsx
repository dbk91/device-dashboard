import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppBar } from "./components/AppBar";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { useDeviceData } from "./hooks/useDeviceData";

import * as deviceHelpers from "./helpers/device";

import type { DeviceStatus } from "./types";

export function App() {
  const { isLoading, data: devices } = useDeviceData();
  const handleDragDrop = React.useCallback((type: DeviceStatus) => {
    return () => {
      console.log(`dropped on ${type}`);
    };
  }, []);

  return (
    <div>
      <AppBar />
      <main className="h-screen container mx-auto pt-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="columns-4 h-full">
            <Column title="Requested" onDragDrop={handleDragDrop("requested")}>
              {devices.filter(deviceHelpers.isRequested).map((device) => (
                <Card key={device.id} primaryText={device.name} />
              ))}
            </Column>
            <Column title="Purchased" onDragDrop={handleDragDrop("purchased")}>
              {devices.filter(deviceHelpers.isPurchased).map((device) => (
                <Card key={device.id} primaryText={device.name} />
              ))}
            </Column>
            <Column title="Shipped" onDragDrop={handleDragDrop("shipped")}>
              {devices.filter(deviceHelpers.isShipped).map((device) => (
                <Card key={device.id} primaryText={device.name} />
              ))}
            </Column>
            <Column title="Installed" onDragDrop={handleDragDrop("installed")}>
              {devices.filter(deviceHelpers.isInstalled).map((device) => (
                <Card key={device.id} primaryText={device.name} />
              ))}
            </Column>
          </div>
        )}
      </main>
    </div>
  );
}
