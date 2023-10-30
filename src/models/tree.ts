export interface Tree {
  root: TreeNode;
}

export interface TreeNode {
  title: string;
  children: TreeNode[];
  id: number;
}
