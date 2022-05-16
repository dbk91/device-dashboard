import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

interface CardProps {
  primaryText: string;
  icon?: JSX.Element;
}

export function Card(props: CardProps) {
  const cardIcon = props.icon ?? <FontAwesomeIcon icon={faQuestionCircle} />;

  return (
    <div className="h-36 w-full border rounded-lg p-2 shadow-sm" draggable>
      <div className="flex gap-2">
        <span>{cardIcon}</span>
        <span>{props.primaryText}</span>
      </div>
    </div>
  );
}
