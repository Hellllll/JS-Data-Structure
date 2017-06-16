/**
 * 1.HashMap的作用是尽可能快的在数据结构中找到一个值
 * 2.利用散列函数确定了数值的位置（index）
 */

function HashTable() {
	var table =  [];

	//散列函数，私有方法；
	var loseloseHashCode = function (key) {
		var hash = 0;
		for (var i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};
	var ValuePair = function (key, value) {
		this.key = key;
		this.value = value;

		this.toString = function () {
			return '[' + this.key + '-' + this.value + ']';
		};
	}
	this.put = function (key, value) {
		var position = loseloseHashCode(key);
		table[position] = value;
	};

	this.get = function (key) {
		return table[loseloseHashCode(key)];
	};

	this.remove = function (key) {
		table[loseloseHashCode(key)] = undefined;
	};
}


//思考：万一有两个值的散列值一样（position）该怎么办呢？
//解决方法：分离链接、线性探查、双散列法
//重写put,get,remove方法

//1.分离链接（在一个位置上保存一个链表数据格式）
this.put = function (key, value) {
	var position = loseloseHashCode(key);

	if (table[position] === undefined) {
		table[position] = new LinkedList();
	}
	table[position].append(new ValuePair(key, value));
};  //学了后面的又忘记前面的了，LinkedList数据结构呢？

this.get = function (key) {
	var position = loseloseHashCode(key);

	if (table[position] !== undefined) {

		//遍历链表来寻找建、值
		var current = table[position].getHead();

		while (current.next) {
			if (current.element.key === key) {
				return current.element.value;
			}
			current = current.next;
		}
		if (current.element.key === key) {
			return current.element.value;
		}
	}
	return undefined;
};

this.remove = function (key) {
	var position = loseloseHashCode(key);

	if (table[postion] !== undefined) {
		var current = table[position].getHead();

		while(current.next) {
			if (current.element.key === key) {
				table[position].remove(current.element);
				if (table[position].isEmpty()) {
					table[position] = undefined;
				}
				return true;
			}
			current = current.next;
		}

		if (current.element.key === key) {
			table[position].remove(current.element);
			if (table[position].isEmpty()) {
				table[position] = undefined;
			}
			return true;
		}
	}
	return false;
};

//2.线性探查（当）
thia.put = function (key, value) {
	var position = loseloseHashCode(key);

	if (table[position] === undefined) {
		table[position] = new ValuePair(key, value);
	} else {
		var index = ++position;
		while (table[index] !== undefined) {
			index++;
		}
		table[index] = new ValuePair(key, value);
	}
};

this.get = function (key) {
	var position = loseloseHashCode(key);

	if (table[position] !== undefined) {
		if (table[position].key === key) {
			return table.position.value;
		} else {
			var index = ++position;
			while (table[index] === undefined || table[index].key !== key) {
				index++;
			}
			if (table[index].key === key) {
				return table[index].value;
			}
		}
	}
	return undefined;
};

//更好的散列函数,可以解决冲突问题
var djb2HashCode = function (key) {
	var hash = 5381;
	for (var i = 0; i < key.length; i++) {
		hash = hash * 33 + key.charCodeAt(i);
	}
	return hash % 1013;
};