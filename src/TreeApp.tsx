import { useState } from "react";

import type { Tree, TreeNode } from "./models/tree";
import CreateNodeForm from "./components/create-node-form/createTreeForm";
import TreeComponent from "./components/tree/tree";

export default function TreeApp() {
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
      <CreateNodeForm tree={tree} setTree={setTree} activeNode={activeNode} />

      <h3>Current Tree</h3>

      <TreeComponent
        tree={tree}
        activeNode={activeNode}
        handleNodeClick={handleNodeClick}
      />
    </div>
  );
}
