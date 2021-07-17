import { CodeNode } from "../../sanity/serializers";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import typescript from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript"
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

SyntaxHighlighter.registerLanguage("ts", typescript)

interface Props {
  node: CodeNode;
}

export default function CodeInput({ node }: Props) {
  const { language, code } = node;
  return (
    <SyntaxHighlighter
      className="md:w-3/4 mx-auto sm:rounded-lg"
      style={darcula}
      language={language}
      showLineNumbers={true}
      useInlineStyles
    >
      {code}
    </SyntaxHighlighter>
  );
}
