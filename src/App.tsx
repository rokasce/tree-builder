import { useState } from "react";

import { Tree, TreeNode } from "./models/node";
import CreateTreeForm from "./components/create-tree-form/createTreeForm";
import TreeComponent from "./components/tree/tree";

export default function App() {
  const [tree, setTree] = useState<Tree | null>(null);
  const [activeNode, setActiveNode] = useState<TreeNode | null>(null);

  const handleNodeClicked = (node: TreeNode) => {
    if (!tree) {
      return;
    }

    setActiveNode(node);
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: "600px",
        marginInline: "auto",
        border: "1px solid black",
      }}
    >
      <h1>Create tree</h1>
      <CreateTreeForm tree={tree} setTree={setTree} activeNode={activeNode} />

      <h2>Current Tree</h2>

      <TreeComponent
        key={activeNode?.title}
        tree={tree}
        activeNode={activeNode}
        setActiveNode={handleNodeClicked}
      />
    </div>
  );
}
