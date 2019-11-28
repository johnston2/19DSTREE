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
  removernodo(key, nodo = this.nodo) {
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
      return this.removernodo(key, nodo.left);
    } else if (nodo.left && !nodo.right.left) {
      return this.removernodo(key, nodo.right);
    } else if (nodo.right && !nodo.right.right) {
      return this.removernodo(key, nodo.right);
    } else {
      return this.removernodo(key, nodo.left);
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
(function useTreeBOU(hijos) {
  const raiz = new Nodo(1);
const hijo1 = new Nodo(2);
const hijo2 = new Nodo(3);
const hijo3 = new Nodo(4);
const tree = new useTreeBOU(raiz);
hijos('primer hijo');
tree.insert(hijo1);
hijos('segundo hijo');
tree.insert(hijo2);
hijos('tercer hijo');
tree.insert(hijo3);
hijos('btf');
hijos(tree.bft());
hijos('postorder');
tree.postorder();
hijos('quitar hijo');
tree.removernodo(3);
hijos('árbol');
hijos(tree);
}) (console.log);
