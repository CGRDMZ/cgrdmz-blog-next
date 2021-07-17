import React from "react";
import BlockContent from "@sanity/block-content-to-react"


export default function BlockRenderer({ node, children }: { node: { style: string }, children: JSX.Element }) {
  const { style = "normal" } = node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    
    let classname = "text-"
    switch (level) {
      case "1":
        classname += "3xl font-bold";
        break;
      case "2":
        classname += "2xl font-bold";
        break;
      default:
        classname += "xl font-bold"
    }

    return React.createElement(
      style,
      { className: classname },
      children
    );
  }
  console.log(node);
  

  if (style === "blockquote") {
    return <blockquote>- {children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block({node, children});
}
