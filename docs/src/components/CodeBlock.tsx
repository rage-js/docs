import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as STYLES from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ children, className, height }: any) => {
  return (
    <div
      style={{
        minHeight: height,
        fontSize: "12px",
      }}
    >
      <SyntaxHighlighter language={className} style={STYLES.atomDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
