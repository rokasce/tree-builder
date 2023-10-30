import { Tree, TreeNode } from "../../models/tree";

interface Props {
  tree: Tree | null;
  handleNodeClick: (activeNode: TreeNode) => void;
  activeNode: TreeNode | null;
}

export default function TreeComponent({
  tree,
  activeNode,
  handleNodeClick,
}: Props) {
  const renderTreeRecursively = (node: TreeNode, level: number = 0) => {
    const { title, children, id } = node;

    return (
      <div
        key={id}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          handleNodeClick(node);
        }}
        style={{
          marginLeft: `${level + 0.6}rem`,
        }}
      >
        <span className={activeNode?.id === id ? "active" : ""}>{title}</span>
        {children.map((child) => renderTreeRecursively(child, level + 1))}
      </div>
    );
  };

  if (!tree) return <div>Your tree is empty</div>;

  return <div>{renderTreeRecursively(tree.root)}</div>;
}
