function traverse(element, callback) {
  callback(element);
  let children = element.children;
  for (let i = 0; i < children.length; i++) {
    traverse(children[i], callback);
  }
}
