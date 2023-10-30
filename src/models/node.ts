export interface TreeNode {
  title: string;
  children: TreeNode[];
}

export interface Tree {
  root: TreeNode;
}
