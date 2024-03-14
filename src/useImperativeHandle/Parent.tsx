import React from "react";
import Child, { ToggleRef } from "./Child";

export default function Parent() {
  const toggleRef = React.useRef<ToggleRef>(null);

  return (
    <>
      <button onClick={() => toggleRef.current?.toggle()}>Parent</button>
      <Child ref={toggleRef} />
    </>
  );
}
