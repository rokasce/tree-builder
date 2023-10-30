import "./index.css";
import { Dispatch, SetStateAction, useState } from "react";

import { Tree, TreeNode } from "../../models/node";

interface Props {
  tree: Tree | null;
  setTree: Dispatch<SetStateAction<Tree | null>>;
  activeNode: TreeNode | null;
}

export default function CreateTreeForm({ tree, setTree, activeNode }: Props) {
  const [nodeName, setNodeName] = useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (!tree) {
            const root: TreeNode = {
              title: nodeName,
              children: [],
            };

            setTree({
              root,
            });
          } else {
            if (activeNode) {
              activeNode?.children.push({ title: nodeName, children: [] });

              setTree({ ...tree });
            }
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
