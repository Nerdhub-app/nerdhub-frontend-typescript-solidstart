import { Component, mergeProps } from "solid-js";

import logoDark from "~/assets/img/nerdhub-logo-dark.png";
import logoLight from "~/assets/img/nerdhub-logo-light.png";
import logoDarkSm from "~/assets/img/nerdhub-logo-sm-dark.png";
import logoLightSm from "~/assets/img/nerdhub-logo-sm-light.png";

import { ThemeColor } from "~/types/theme";

export type AppLogoOrientation = "horizontal" | "vertical";

export type AppLogoProps = {
  width?: string | number;
  height?: string | number;
  theme?: ThemeColor;
  orientation?: AppLogoOrientation;
};

const AppLogo: Component<AppLogoProps> = (_props) => {
  const props = mergeProps(
    { width: "auto", height: "auto", theme: "light", orientation: "horizontal" },
    _props,
  );

  const src = () => {
    const isLight = props.theme === "light";
    if (props.orientation === "horizontal") {
      return isLight ? logoLight : logoDark;
    }
    return isLight ? logoLightSm : logoDarkSm;
  };

  const width = () => (typeof props.width === "number" ? `${props.width / 16}rem` : props.width);
  const height = () =>
    typeof props.height === "number" ? `${props.height / 16}rem` : props.height;

  return <img src={src()} alt="Nerdhub logo" style={{ width: width(), height: height() }} />;
};

export default AppLogo;
