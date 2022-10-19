function Mymodule() {
  //Mymodule内部私有数据
  var data = 'atguigu'

  //foo中操作了外部函数的data
  function foo() {
    console.log('foo',data)
  }

  //bar中操作了外部函数的data
  function bar() {
    console.log('bar',data)
  }

  //fn中操作了外部函数的data
  function fn() {
    console.log('fn',data)
  }
  return {
    foo:foo,
    bar:bar
  }
}
