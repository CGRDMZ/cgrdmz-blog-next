import { CodeNode } from "../../sanity/serializers";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("sh", bash);
SyntaxHighlighter.registerLanguage("typescript", typescript);

interface Props {
  node: CodeNode;
}

export default function CodeInput({ node }: Props) {
  const { language, code } = node;
  return (
    <div className="max-w-min mx-auto">
      <SyntaxHighlighter
        style={darcula}
        language={language}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
