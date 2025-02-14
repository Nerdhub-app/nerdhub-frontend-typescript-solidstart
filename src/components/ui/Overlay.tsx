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
  portal?: boolean;
  onClick?: () => void;
}>;

const PortalWrapper: ParentComponent<{ portal: boolean }> = (props) => {
  const _children = children(() => props.children);

  return (
    <Show when={props.portal} fallback={_children()}>
      <Portal>{_children()}</Portal>
    </Show>
  );
};

const Overlay: ParentComponent<OverlayProps> = (_props) => {
  const props = mergeProps({ show: true, portal: true }, _props);

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
    <PortalWrapper portal={props.portal}>
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
    </PortalWrapper>
  );
};

export default Overlay;
