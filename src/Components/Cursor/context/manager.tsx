import React, { useState } from "react";
import CursorContext, {
  CursorLookType,
} from "./CursorContext";

const CursorManager = ({ children }) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CursorContext.Provider value={{ type, setType }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorManager;