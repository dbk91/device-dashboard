import * as React from "react";
import { useDrag } from "react-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

import type { DragSourceMonitor } from "react-dnd";

interface CardProps {
  primaryText: string;
  dragData?: unknown;
  onDragEnd?: (item: any, monitor: DragSourceMonitor) => void;
  icon?: JSX.Element;
}

export function Card(props: CardProps) {
  const cardIcon = props.icon ?? <FontAwesomeIcon icon={faQuestionCircle} />;
  const { dragData, onDragEnd } = props;
  const [{ isDragging }, dragRef] = useDrag(
    {
      type: "card",
      item: dragData,
      end: onDragEnd,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    },
    [dragData, onDragEnd]
  );

  return (
    <div
      ref={dragRef}
      className={`h-12 w-full border rounded-lg p-2 shadow-sm ${
        isDragging ? "hover:cursor-grabbing" : "hover:cursor-grab"
      }`}
      draggable
    >
      <div className="flex gap-2">
        <span>{cardIcon}</span>
        <span>{props.primaryText}</span>
      </div>
    </div>
  );
}
