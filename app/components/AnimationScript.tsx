"use client";

import { useEffect } from "react";
import { initAnimations } from "./features/animation";

export function AnimationScript() {
  useEffect(() => {
    initAnimations();
  }, []);

  return null;
}
