class Nodo {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(nodo) {
    this.nodo = nodo;
  }

  insert(n, nodo = this.nodo) {
    if (!nodo.left) {
      nodo.left = n;
      return nodo;
    } else if (!nodo.right) {
      nodo.right = n;
      return nodo;
    } else if (nodo.right && !nodo.left.right) {
      return this.insert(n, nodo.left);
    } else if (nodo.left && !nodo.right.left) {
      return this.insert(n, nodo.right);
    } else if (nodo.right && !nodo.right.right) {
      return this.insert(n, nodo.right);
    } else {
      return this.insert(n, nodo.left);
    }
  }

  remove(key, nodo = this.nodo) {
    if (nodo == null) {
      return null;
    }
    if (nodo.left.data === key) {
      nodo.left = null;
      return nodo;
    } else if (nodo.right.data === key) {
      nodo.right = null;
      return nodo;
    } else if (nodo.right && !nodo.left.right) {
      return this.remove(key, nodo.left);
    } else if (nodo.left && !nodo.right.left) {
      return this.remove(key, nodo.right);
    } else if (nodo.right && !nodo.right.right) {
      return this.remove(key, nodo.right);
    } else {
      return this.remove(key, nodo.left);
    }
  }

  bft(nodo = this.nodo) {
    let queue = [];
    let print = [];

    queue.push(nodo);

    while (queue.length) {
      let nodoTemp = queue.shift();

      print.push(nodoTemp.data);

      if (nodoTemp.left) {
        queue.push(nodoTemp.left);
      }

      if (nodoTemp.right) {
        queue.push(nodoTemp.right);
      }
    }

    return print;
  }

 postorder(nodo=this.nodo){
        if(nodo != null){  
            this.postorder(nodo.left)
            this.postorder(nodo.rigth)
            console.log(nodo.data)}
    }
}

const raiz = new Nodo(1);

const hijo1 = new Nodo(2);
const hijo2 = new Nodo(3);
const hijo3 = new Nodo(4);
const hijo4 = new Nodo(5);
const hijo5 = new Nodo(6);
const hijo6 = new Nodo(7);
const hijo7 = new Nodo(8);
const hijo8 = new Nodo(9);
const hijo9 = new Nodo(10);

const tree = new Tree (raiz);

tree.insert(hijo1);

tree.insert(hijo2);

tree.insert(hijo3);

tree.insert(hijo4);

tree.insert(hijo5);

tree.insert(hijo6);

tree.insert(hijo7);

tree.insert(hijo8);

tree.insert(hijo9);

console.log('BTF');
console.log(tree.bft());

console.log('postorder');
tree.postorder();

tree.remove(2);

console.log('postorder');
tree.postorder();

tree;
