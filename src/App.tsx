import { useState } from "react";

import type { Tree, TreeNode } from "./models/tree";
import CreateTreeForm from "./components/create-tree-form/createTreeForm";
import TreeComponent from "./components/tree/tree";

export default function App() {
  const [tree, setTree] = useState<Tree | null>(null);
  const [activeNode, setActiveNode] = useState<TreeNode | null>(null);

  const handleNodeClick = (node: TreeNode) => {
    if (!tree) {
      return;
    }

    setActiveNode(node);
  };

  return (
    <div className="container">
      <h1>Create tree</h1>
      <CreateTreeForm tree={tree} setTree={setTree} activeNode={activeNode} />

      <h3>Current Tree</h3>

      <TreeComponent
        tree={tree}
        activeNode={activeNode}
        handleNodeClick={handleNodeClick}
      />
    </div>
  );
}
