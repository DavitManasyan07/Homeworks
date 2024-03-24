function buildTree1(nodes) {
  const tree = {};
  const map = {};
  
  nodes.forEach(node => {
    const { id, parentId } = node;
    map[id] = { id, children: {} };
    if (parentId === null) {
      tree[id] = map[id].children;
    } else {
      map[parentId].children[id] = map[id].children;
    }
  });
  
  return tree;
}

function buildTree2(nodes) {
  const tree = {};
  const map = {};
  
  nodes.forEach(node => {
    const { id, parentId } = node;
    map[id] = { id, children: [] };
    if (parentId === null) {
      tree[id] = map[id];
    } else {
      map[parentId].children.push(map[id]);
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

const tree1 = buildTree1(nodes);
console.log(tree1);

const tree2 = buildTree2(nodes);
console.log(tree2);
