import { Tree, TreeNode } from "../../models/node";

interface Props {
  tree: Tree | null;
  setActiveNode: (activeNode: TreeNode) => void;
  activeNode: TreeNode | null;
}

export default function TreeComponent({
  tree,
  activeNode,
  setActiveNode,
}: Props) {
  const renderTree = (node: TreeNode) => {
    return (
      <div
        key={node.title}
        onClick={(e) => {
          e.stopPropagation();
          setActiveNode(node);
        }}
      >
        <span
          style={{
            color: activeNode?.title === node.title ? "red" : "",
          }}
        >
          {node.title}
        </span>
        {node.children.map((child) => renderTree(child))}
      </div>
    );
  };

  if (!tree) return <div>Your tree is empty</div>;

  return <div>{renderTree(tree.root)}</div>;
}
