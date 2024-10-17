"use client";

import Sidebar from "@/components/sidebar";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "@/components/CodeBlock";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <center>
          <Image src="/RAGE-default.png" width="377" height="110" alt="RAGE" />
        </center>

        <MDXProvider components={{ code: CodeBlock }}>{children}</MDXProvider>
      </div>
    </div>
  );
}
