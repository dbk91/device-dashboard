import * as React from "react";

interface ColumnProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export function Column(props: ColumnProps) {
  return (
    <div className="w-full">
      <h3 className="font-bold">{props.title}</h3>
      <div className="border rounded-sm bg-white p-2">{props.children}</div>
    </div>
  );
}
