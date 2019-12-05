export class NodeElem<ValueType> {
	public next: NodeElem<ValueType>;
	public prev: NodeElem<ValueType>;
	public value: ValueType;

	constructor(data: ValueType) {
		this.value = data;
	}
}
