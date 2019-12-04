import {List} from './List';
import {Collection} from './Collection';
import {NodeElem} from './NodeElem';

export class Queue<T> implements Collection<T> {
	protected _list: List<T> = new List();

	public makeArray(): Array<T> {
		return this._list.makeArray();
	}

	public getLength(): number {
		return this._list.getLength();
	}
	
	public add(data: T): NodeElem<T> {
		return this._list.addToEnd(data);
	}
}
