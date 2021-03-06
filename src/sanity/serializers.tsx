import BlockRenderer from "../components/sanity-serializers/BlockRenderer";
import CodeInput from "../components/sanity-serializers/CodeInput";
import ImageRenderer from "../components/sanity-serializers/ImageRenderer";
import LinkRenderer from "../components/sanity-serializers/LinkRenderer";
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
    block: BlockRenderer,
    image: ImageRenderer,
  },
  marks: {
    link: LinkRenderer
  }
};

export default serializers;
