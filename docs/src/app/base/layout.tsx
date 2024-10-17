"use client";

import Sidebar from "@/components/sidebar";
import CenterLogo from "@/assets/RAGE-default.png";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "@/components/CodeBlock";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Image className="center-logo" src={CenterLogo} alt="RAGE" />
        <MDXProvider components={{ code: CodeBlock }}>{children}</MDXProvider>
      </div>
    </div>
  );
}
