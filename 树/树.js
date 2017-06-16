/**
 * 存储需要快速查找的数据非常有用
 *创建 BinarySearchTree类（二叉搜索树的规律搞清楚）
 */
function BinarySearchTree() {

	var Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};
	var root = null;

	//使用此方法插入一个节点也可以构建一颗二叉搜索树
	this.insert = function (key) {
		var newNode = new Node(key);

		if (root === null) {
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	};
	function insertNode(node, newNode) {

		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	}

	/**
	 * 下面是三种对树进行遍历的方法，主要利用函数递归方法
	 */
	//中序遍历一棵树，一种常应用是对树的排序
	this.inOrderTraverse = function (callback) {
		inOrderTraverseNode(root, callback);
	};
	//关于递归函数的原理自己能想通吗？当判断条件不满足时，
	//立刻退回上一步
	function inOrderTraverseNode(node, callback){
		if (node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	}

	//优先于后代节点访问节点的方式；一种常见应用是打印一个结构化的文档
	this.preOrderTraverse = function (callback) {
		preOrderTraverseNode(root, callback);
	};
	function preOrderTraverseNode(node, callback) {
		if (node !== null) {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	}

	//后序遍历的一种应用是计算一个目
	//录和它的子目录中所有文件所占空间的大小。
	this.postOrderTraverse = function (callback) {
		postOrderTraverseNode(root, callback);
	};
	function postOrderTraverseNode(node, callback) {
		if (node !== null) {			
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}

	//最左边的子节点
	this.min = function () {
		return minNode(root);
	};
	function minNode(node) {

		if (node) {
			while (node && node.left !== null) {
				node = node.left;
			} 
			return node.key;
		}
		return null;
	}

	this.max = function () {
		return maxNode(root);
	};
	function maxNode(node) {
		if (node) {
			while (node && node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
		return null;
	}

	//搜索一个特定的值
	this.search = function (key) {
		searchNode(root, key);
	};
	function searchNode(node, key) {
		if (node === null) {
			return false;
		}
		if (key < node.key) {
			return searchNode(node.left, key);
		} else if (key > node.key) {
			return searchNode(node.right, key);
		} else {
			return true;
		}
	};

	//很复杂的方法
	this.remove = function (key) {

	};
}

function print(value) {
	console.log(value);
}
var tree = new BinarySearchTree(); //使tree具有二叉搜索树中的方法
tree.insert(11);
tree.insert(123);
tree.insert(13);
tree.insert(21);
tree.inOrderTraverse(print);

