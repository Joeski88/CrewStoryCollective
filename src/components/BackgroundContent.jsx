import { createContext, useContext, useState } from "react";

const BackgroundContext = createContext();

export function BackgroundProvider({ children }) {
  const defaultBg = "/assets/bg-image.svg";
  const [activeBg, setActiveBg] = useState(defaultBg);

  return (
    <BackgroundContext.Provider value={{ activeBg, setActiveBg, defaultBg }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  return useContext(BackgroundContext);
}
