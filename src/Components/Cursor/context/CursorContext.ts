import { createContext } from "react";

export type CursorLookType =
  | "slider-hover"
  | "slider-drag"
  | "text"
  | "link"
  | "hamburger"
  | "try"
  | "default";
  
export type CursorType = {
  type: CursorLookType;
  setType: (type: CursorLookType) => void;
};

const CursorContext = createContext<CursorType>({
  type: "default",
  setType: () => {},
});

export default CursorContext;