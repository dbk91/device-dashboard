import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

interface CardProps {
  primaryText: string;
  icon?: JSX.Element;
}

export function Card(props: CardProps) {
  const rootRef = React.useRef<HTMLDivElement>();
  const cardIcon = props.icon ?? <FontAwesomeIcon icon={faQuestionCircle} />;

  const [isDragging, setIsDragging] = React.useState(false);

  React.useEffect(() => {
    const ref = rootRef.current;

    function handleDragStart() {
      setIsDragging(true);
    }

    function handleDragEnd() {
      setIsDragging(false);
    }

    ref.addEventListener("dragstart", handleDragStart);
    ref.addEventListener("dragend", handleDragEnd);

    return () => {
      ref.removeEventListener("dragstart", handleDragStart);
      ref.removeEventListener("dragend", handleDragEnd);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`h-36 w-full border rounded-lg p-2 shadow-sm ${
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
