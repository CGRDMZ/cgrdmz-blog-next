import BlockRenderer from "../components/sanity-serializers/BlockRenderer";
import CodeInput from "../components/sanity-serializers/CodeInput";
import { ListItemRenderer, ListRenderer } from "../components/sanity-serializers/ListRenderer";

export interface CodeNode {
  language: string;
  code: string;
}

const serializers = {
  list: ListRenderer,
  listItem: ListItemRenderer,
  types: {
    codeInput: function CodeBlock({ node }: { node: CodeNode }) {
      return <CodeInput node={node} />;
    },
    block: BlockRenderer
  },
};

export default serializers;
