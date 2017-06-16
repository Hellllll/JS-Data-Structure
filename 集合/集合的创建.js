/**
 * 1.实现是以Set类为基础的，ES6中的一种数据结构
 * 2.特点在于：JavaScript的对象不允许一个键指向两个不同的属性，
 * 也保证了集合里的元素都是唯一的。无序和不重复
 */

function Set() {
	var items = {};

	this.has = function (value) {
		//return value in items;
		return items.hasOwnProperty(value);//更好的实现方式
	};

	this.add = function (value) {
		if (!this.has(value)) {
			items[value] = value;
			return true;
		}
		return false;
	};

	this.remove = function (value) {
		if (this.has(value)) {
			delete items[value];
			return true;
		} 
		return false;
	};

	this.clear = function () {
		items = {};
	};

	this.size = function () {
		/*此处有三种方法可实现
		*1.使用length变量控制；
		*2.使用Object.keys(items).length方法控制；
		*3.遍历对象的每一项，增加一个自增变量
		**/
		return Object.keys(items).length;

		/*this.sizeLegacy = function(){
		  	var count = 0;
			for(var prop in items) { //{5}
				if(items.hasOwnProperty(prop)) //{6}
					++count; //{7}
			}
			return count;
			};*/
	};

	// 提取集合的所有属性
	this.values = function () {
		return Object.keys(items);

		// 或者
		/*this.valuesLegacy = function(){
			var keys = [];
			for(var key in items){ //{7}
				keys.push(key); //{8}
			}
			return keys;
		};*/
	};

	/*思考如何实现：并，交，差，子集方法*/

	//1.并集:总体思路遍历两个集合的项，并添加到新的集合中
	this.union = function (otherSet) {

		var unionSet = new Set();
		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		values = otherSet.values();
		for (var i = 0; i < values.length; i++) {
			unionSet.add(values[i]);
		}

		return unionSet;
	};

	//2.交集
	this.intersection = function(otherSet) {
		var intersectionSet = new Set();

		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			if (otherSet.has(values[i])) {
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	};

	//3.差集
	this.difference = function (otherSet) {
		var difference = new Set();

		var values = this.values();
		for (var i = 0; i < values.length; i++) {
			if (!otherSet.has(values[i])) {
				difference.add(values[i]);
			}
		}
		return difference;	
	};

	//4.子集
	this.subset = function(otherSet) {

		if (this.size() > otherSet.size()) {
			return false;
		} else {
			var values = this.values();
			for (var i=0; i<values.length; i++) {
				if (!otherSet.has(values[i])) {
					return false;
				}
			}
			return true;
		}
	};
}

/*For test*/
var set = new Set();
set.add(1);
console.log(set.values()); //输出["1"]
console.log(set.has(1)); //输出true
console.log(set.size()); //输出1
set.add(2);
console.log(set.values()); //输出["1", "2"]
console.log(set.has(2)); //true
console.log(set.size()); //2
set.remove(1);
console.log(set.values()); //输出["2"]
set.remove(2);
console.log(set.values()); //输出[]



	