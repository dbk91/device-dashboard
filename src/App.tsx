import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppBar } from "./components/AppBar";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { useDeviceData } from "./hooks/useDeviceData";

import * as deviceHelpers from "./helpers/device";

import type { DragSourceMonitor } from "react-dnd";
import type { DeviceStatus } from "./types";

export function App() {
  const { isLoading, data: devices, mutate } = useDeviceData();
  const handleDrop = React.useCallback<
    (item: any, monitor: DragSourceMonitor) => void
  >(
    (item, monitor) => {
      const dropResult = monitor.getDropResult<{ columnName: DeviceStatus }>();
      if (dropResult !== null) {
        mutate(
          (devices) =>
            devices.map((device) => {
              if (device.id === item.id) {
                return { ...device, status: dropResult.columnName };
              }

              return device;
            }),
          {
            revalidate: false,
          }
        );
      }
    },
    [mutate]
  );

  return (
    <div>
      <AppBar />
      <main className="h-screen container mx-auto pt-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <DndProvider backend={HTML5Backend}>
            <div className="columns-4 h-full">
              <Column title="Requested" dropData={{ columnName: "requested" }}>
                {devices.filter(deviceHelpers.isRequested).map((device) => (
                  <Card
                    key={device.id}
                    primaryText={device.name}
                    dragData={{ id: device.id }}
                    onDragEnd={handleDrop}
                  />
                ))}
              </Column>
              <Column title="Purchased" dropData={{ columnName: "purchased" }}>
                {devices.filter(deviceHelpers.isPurchased).map((device) => (
                  <Card
                    key={device.id}
                    primaryText={device.name}
                    dragData={{ id: device.id }}
                    onDragEnd={handleDrop}
                  />
                ))}
              </Column>
              <Column title="Shipped" dropData={{ columnName: "shipped" }}>
                {devices.filter(deviceHelpers.isShipped).map((device) => (
                  <Card
                    key={device.id}
                    primaryText={device.name}
                    dragData={{ id: device.id }}
                    onDragEnd={handleDrop}
                  />
                ))}
              </Column>
              <Column title="Installed" dropData={{ columnName: "installed" }}>
                {devices.filter(deviceHelpers.isInstalled).map((device) => (
                  <Card
                    key={device.id}
                    primaryText={device.name}
                    dragData={{ id: device.id }}
                    onDragEnd={handleDrop}
                  />
                ))}
              </Column>
            </div>
          </DndProvider>
        )}
      </main>
    </div>
  );
}
