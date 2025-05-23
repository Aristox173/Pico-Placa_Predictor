import "../styles/Container.css";
import type { ContainerProps } from "../types";

export default function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
