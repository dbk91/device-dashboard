import * as React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "react-router-dom";

import { useDeviceData } from "../../hooks/useDeviceData";
import * as deviceHelpers from "../..//helpers/device";
import { Column } from "../../components/Column";
import { Card } from "../../components/Card";

import type { DragSourceMonitor } from "react-dnd";
import type { Device, DeviceStatus } from "../../types";

export function Dashboard() {
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

  const renderDeviceCard = React.useCallback(
    (device: Device) => {
      return (
        <Card
          key={device.id}
          primaryText={device.name}
          dragData={{ id: device.id }}
          onDragEnd={handleDrop}
          primaryAction={
            <Link to={`/devices/${device.id}`} className="text-blue-500">
              View Details
            </Link>
          }
        />
      );
    },
    [handleDrop]
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <div className="columns-4 h-full">
            <Column title="Requested" dropData={{ columnName: "requested" }}>
              {devices.filter(deviceHelpers.isRequested).map(renderDeviceCard)}
            </Column>
            <Column title="Purchased" dropData={{ columnName: "purchased" }}>
              {devices.filter(deviceHelpers.isPurchased).map(renderDeviceCard)}
            </Column>
            <Column title="Shipped" dropData={{ columnName: "shipped" }}>
              {devices.filter(deviceHelpers.isShipped).map(renderDeviceCard)}
            </Column>
            <Column title="Installed" dropData={{ columnName: "installed" }}>
              {devices.filter(deviceHelpers.isInstalled).map(renderDeviceCard)}
            </Column>
          </div>
        </DndProvider>
      )}
    </>
  );
}
