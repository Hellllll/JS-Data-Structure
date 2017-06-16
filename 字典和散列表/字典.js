//创建一个Map（字典）类型的数据结构
//解决的现实问题
//一个实际的字典（单词
//和它们的释义）以及一个地址簿。
function Dictionary() {
	var items = {};

	this.has = function (key) {
		return key in items;
	};
	this.set = function (key, value) {
		items[key] = value;
	};
	this.remove = function (key) {
		if (this.has(key)) {
			delete items[key];
			return true;
		} 
		return false;
	};

	this.get = function (key) {
		return this.has(key) ? items[key] : undefined;	
	};

	this.values = function () {
		var values = [];
		for (var k in items) {
			if (this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};

	this.getItems = function() {
		return items;
	};
}