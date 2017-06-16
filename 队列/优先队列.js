function PriorityQueue() {
	var items = [];

	function QueueElement (element, priority) { //创建一个对象保存元素和优先级
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element, priority);

		if (this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false; //是否已经添加，什么作用呢？
			for (var i=0; i < items.length; i++){
				if (queueElement.priority < items[i].priority) {
					items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}
			if (!added) {
				items.push(queueElement);
			}
		}
	};

	this.dequeue = function() {
		return items.shift();
	};

	this.front = function() {
		return items[0];
	};
	this.isEmpty = function () {
		return items.length == 0;
	};

	this.size = function(){
		return items.length;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		console.log(items.toString());
	};
}

var priorityQueue = new PriorityQueue();
	priorityQueue.enqueue("John", 2);
	priorityQueue.enqueue("Jack", 1);
	priorityQueue.enqueue("Camila", 1);
	priorityQueue.print();