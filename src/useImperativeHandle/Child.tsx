import React from "react";

export type ToggleRef = {
  toggle: () => void;
};

type ToggleProps = React.ComponentPropsWithRef<"button">;

const Child = React.forwardRef(
  (props: ToggleProps, ref: React.Ref<ToggleRef>) => {
    const [on, onSet] = React.useState(false);
    const toggle = () => onSet((prev) => !prev);

    React.useImperativeHandle(ref, () => ({ toggle }));

    return (
      <section style={{ border: "1px solid black", width: "fit-content" }}>
        <p>{String(on)}</p>
        <button {...props} onClick={toggle}>
          Child
        </button>
      </section>
    );
  }
);

export default Child;
