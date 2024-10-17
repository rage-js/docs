"use client";

import { useEffect } from "react";

export default function Core() {
  useEffect(() => {
    window.location.replace("/core/index.html");
  }, []);

  return <></>;
}
