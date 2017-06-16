/**
 * 1.当要进行大量的添加和删除元素时可以选择此种数据结构
 */
function LinkedList() {

	var Node = function (element) {
		this.element = element;
		this.next = null;
	};

	var length = 0,
		head = null;

	//1.对链表项的操作
	/*在链表后面追加项*/
	this.append = function (element) {
		var node = new Node(element), 
			current;

		if (head === null) {
			head = node;
		} else {
			current = head;

			while(current.next) {
				current = current.next;
			}
			current.next = node;
			length++;			
		}
		return length;		
	};

	/*返回的值为移除的项.逻辑简单，头脑清晰时很容易想到*/
	this.removeAt = function (position) {
		
		if (position > -1 && position < length) {
			var current = head;
			var previous,
				index = 0;

			if (position === 0) {
				head = current.next;
			} else {

				//遍历到要删除的项
				while (index++ < position) {
					previous = current;
					current = current.next;
				}

				previous.next = current.next;
			}

			length--;
			return current.element;			
		} else {
			return null;
		}
	};

	/*在任意位置插入一个项,返回插入成功与否的布尔值
	* 和上面的方法有些相似，仔细想想，还是挺简单的
	*/
	this.insert = function (position, element) {

		if (position >= 0 && position <= length) {
			var node = new Node(element),
				previous,
				current = head,
				index = 0;

			if (position === 0) {
				node.next = head;
				head = node;
			} else {

				while (index++ < position) {
					//一直向后移动，直到找到规定的项
					previous = current;
					current = current.next;
				}

				previous.next = node;
				node.next = current;
			}
			length++;
			return true;
		} else {
			return false;
		}
	};

	//2.其他一些方法
	this.toString = function () {
		var current = head;
		var string = '';

		while (current) {
			string = current.element;
			current = current.next;
		}
		return string;
	};

	this.indexOf = function (element) {
		var current = head,
			index = 0;

		while (current) {
			if (element === current.element) {
				return index;
			} else {
				index++;
				current = current.next;
			}
		}
		return -1;//如果没找到，就返回-1
	};

	//可以借助上面的办法实现以下的一些方法
	this.remove = function (element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};

	this.isEmpty = function () {
		return length === 0;
	};

	this.size = function () {
		return length;
	};

	this.getHead = function () {
		if (head) {
			return head;
		}
	};
}

/*test*/
var list = new LinkedList();
var array = [1,2,3,4];
for (var i in array) {
	list.append(array[i]);
};
list;