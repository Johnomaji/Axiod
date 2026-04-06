"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import DemoModal from "./DemoModal";

const ModalContext = createContext<{ openDemo: () => void }>({
  openDemo: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openDemo: () => setDemoOpen(true) }}>
      {children}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </ModalContext.Provider>
  );
}
