import { Dispatch, SetStateAction, useState } from "react";

import { Tree, TreeNode } from "../../models/tree";

interface Props {
  tree: Tree | null;
  setTree: Dispatch<SetStateAction<Tree | null>>;
  activeNode: TreeNode | null;
}

export default function CreateNodeForm({ tree, setTree, activeNode }: Props) {
  const [nodeName, setNodeName] = useState<string>("");

  const createRoot = () => {
    const root: TreeNode = {
      title: nodeName,
      children: [],
      id: Date.now(),
    };

    setTree({
      root,
    });
  };

  const createChild = () => {
    if (activeNode && tree) {
      activeNode.children.push({
        title: nodeName,
        children: [],
        id: Date.now(),
      });

      setTree({ ...tree });
    }
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (!nodeName) {
            return;
          }

          if (!tree) {
            createRoot();
          } else {
            createChild();
          }

          setNodeName("");
        }}
      >
        <input
          type="text"
          name="name"
          value={nodeName}
          onChange={(event) => setNodeName(event.target.value)}
          placeholder="Enter node name"
        />
        <button
          type="submit"
          disabled={!nodeName}
          style={{ marginLeft: "1.2rem" }}
        >
          {tree ? "Add child" : "Create root"}
        </button>
      </form>
    </div>
  );
}
