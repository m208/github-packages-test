declare module "Button/Button" {
  import * as React from "react";
  export interface SimpleButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

  export function SimpleButton({
    children,
    onClick,
  }: SimpleButtonProps): JSX.Element;
}
