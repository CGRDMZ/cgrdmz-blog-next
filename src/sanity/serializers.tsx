import CodeInput from "../components/CodeInput";

export interface CodeNode {
  language: string;
  code: string;
}

const serializers = {
  types: {
    codeInput: function CodeBlock({ node }: { node: CodeNode }) {
      return <CodeInput node={node} />;
    },
  },
};

export default serializers;
