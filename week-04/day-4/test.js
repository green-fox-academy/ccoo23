// var a = {a: 1}; 
// var b = Object.create(a);
// // b ---> a ---> Object.prototype ---> null
// console.log(b.a); // 1 (继承而来)

function A(a) {
  this.varA = a;
  return varA;
}

// 以上函数 A 的定义中，既然 A.prototype.varA 总是会被 this.varA 遮蔽，
// 那么将 varA 加入到原型（prototype）中的目的是什么？
A.prototype = {
  varA: 787,
  /*
  既然它没有任何作用，干嘛不将 varA 从原型（prototype）去掉 ? 
  也许作为一种在隐藏类中优化分配空间的考虑 ?
  https://developers.google.com/speed/articles/optimizing-javascript 
  如果varA并不是在每个实例中都被初始化，那这样做将是有效果的。
  */
}
console.log(A(a));
