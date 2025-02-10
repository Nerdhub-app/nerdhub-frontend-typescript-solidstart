import {
  children,
  createEffect,
  createSignal,
  JSX,
  mergeProps,
  onMount,
  ParentComponent,
  ParentProps,
  Show,
} from "solid-js";
import { Portal } from "solid-js/web";

import styles from "./Overlay.module.css";

export type OverlayProps = ParentProps<{
  show?: boolean;
  class?: JSX.HTMLAttributes<HTMLDivElement>["class"];
  classList?: JSX.HTMLAttributes<HTMLDivElement>["classList"];
  onClick?: () => void;
}>;

const Overlay: ParentComponent<OverlayProps> = (_props) => {
  const props = mergeProps({ show: true }, _props);

  const [show, setShow] = createSignal(false);

  const _children = children(() => _props.children);

  const className = () => {
    return [
      "fixed inset-0 z-10 h-screen w-screen bg-current/60 backdrop-blur-sm transition-opacity duration-500",
      styles.fadeIn,
      props.class,
    ]
      .filter(Boolean)
      .join(" ");
  };

  createEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
      setShow(props.show);
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => setShow(false), 500);
    }
  });

  function handleClick() {
    props.onClick?.();
  }

  return (
    <Portal>
      <Show when={show()}>
        <div
          class={className()}
          classList={{ ...props.classList }}
          style={{ opacity: props.show ? "1" : "0" }}
          onClick={handleClick}
        >
          {_children()}
        </div>
      </Show>
    </Portal>
  );
};

export default Overlay;
