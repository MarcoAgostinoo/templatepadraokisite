"use client";

import { useEffect, useRef } from "react";
import { initAnimations } from "../utils/animations";

export function AnimationScript() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      // Inicializa as animações apenas uma vez quando o componente montar
      initAnimations();
      initialized.current = true;
    }
  }, []);

  return null;
}
