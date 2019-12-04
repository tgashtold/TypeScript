class Queue<T> implements Collection<T> {
	protected _list: List<T> = new List();

	public makeArray(): Array<T> {
		return this._list.makeArray();
	}

	public getLength() {
		return this._list.getLength();
	}
	public add(data: T): NodeElem<T> {
		return this._list.addToEnd(data);
	}
}
