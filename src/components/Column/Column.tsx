import * as React from "react";
import { useDrop } from "react-dnd";

interface ColumnProps {
  title: string;
  dropData?: unknown;
  children?: React.ReactNode | React.ReactNode[];
}

export function Column(props: ColumnProps) {
  const [{ isActive }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: () => props.dropData,
    collect: (monitor) => ({
      isActive: monitor.isOver() && monitor.canDrop(),
    }),
  }));

  return (
    <div ref={dropRef} className="w-full h-full py-4">
      <h3 className="font-bold">{props.title}</h3>
      <div
        className={`h-96 overflow-y-auto border rounded-sm p-2 flex flex-col gap-2 ${
          isActive ? "bg-sky-200" : "bg-white"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
