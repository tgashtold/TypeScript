export class TreeNode<T> {
    public value: T | null = null;
    public parent: TreeNode<T> | null = null;
    public children: TreeNode<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }
}






