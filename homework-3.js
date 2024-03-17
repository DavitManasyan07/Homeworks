function buildTree1(nodes) {
    const tree = {};
    const map = {};
    
    nodes.forEach(node => {
      map[node.id] = {...node, children: {}};
    });
    
    nodes.forEach(node => {
      const { id, parentId } = node;
      if (parentId === null) {
        tree[id] = map[id].children;
      } else {
        const parent = map[parentId].children;
        parent[id] = map[id].children;
      }
    });
    
    return tree;
  }
  
  function buildTree2(nodes) {
    const tree = {};
    const map = {};
    
    nodes.forEach(node => {
      map[node.id] = {...node, children: []};
    });
    
    nodes.forEach(node => {
      const { id, parentId } = node;
      if (parentId === null) {
        tree[id] = map[id];
      } else {
        const parent = map[parentId].children;
        parent.push(map[id]);
      }
    });
    
    return tree;
  }
  
  const nodes = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 3 },
    { id: 7, parentId: 4 },
    { id: 8, parentId: 7 },
    { id: 9, parentId: 8 },
  ];
  
  console.log(buildTree1(nodes));

  console.log(buildTree2(nodes));



//////////////////////////////

function helloDecorator(fn) {
  return function (...arg) {
    console.log("Hello this is Decorator function");

    return fn.apply(this, arg);
  };
}
function sum(a, b) {
  console.log("asd", this);
  return a + b;
}

let res = helloDecorator(sum);

o = {
  asd: "adafsdfsdf",
  sum,
  res,
};

o.res(2, 4);
