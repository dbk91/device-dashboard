import * as React from "react";

interface ColumnProps {
  title: string;
  onDragDrop: () => void;
  children?: React.ReactNode | React.ReactNode[];
}

export function Column(props: ColumnProps) {
  const rootRef = React.useRef<HTMLDivElement>();
  const [dragEnter, setDragEnter] = React.useState(false);

  React.useEffect(() => {
    function handleDragEnter() {
      setDragEnter(true);
    }

    function handleDragOver(e) {
      e.preventDefault();
    }

    function handleDragLeave() {
      setDragEnter(false);
    }

    rootRef.current.addEventListener("dragenter", handleDragEnter);
    rootRef.current.addEventListener("dragover", handleDragOver);
    rootRef.current.addEventListener("dragleave", handleDragLeave);

    return () => {
      rootRef.current.removeEventListener("dragenter", handleDragEnter);
      rootRef.current.removeEventListener("dragover", handleDragOver);
      rootRef.current.removeEventListener("dragleave", handleDragLeave);
    };
  }, []);

  const { onDragDrop } = props;
  React.useEffect(() => {
    rootRef.current.addEventListener("drop", onDragDrop);

    return () => {
      rootRef.current.removeEventListener("drop", onDragDrop);
    };
  }, [onDragDrop]);

  return (
    <div ref={rootRef} className="w-full h-full py-4">
      <h3 className="font-bold">{props.title}</h3>
      <div
        className={`h-96 overflow-y-auto border rounded-sm p-2 flex flex-col gap-2 ${
          dragEnter ? "bg-sky-200" : "bg-white"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
