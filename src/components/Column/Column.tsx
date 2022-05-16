import * as React from "react";

interface ColumnProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export function Column(props: ColumnProps) {
  return (
    <div className="w-full h-full py-4">
      <h3 className="font-bold">{props.title}</h3>
      <div className="h-96 overflow-y-auto border rounded-sm bg-white p-2 flex flex-col gap-2">
        {props.children}
      </div>
    </div>
  );
}
