/*
使用IIFE使用
 */
;(function () {
  //私有数据
  var data = 'atguigu'

  function foo() {
    console.log('foo',data)
  }

  function bar() {
    console.log('bar',data)
  }

  function fn() {
    console.log('fn',data)
  }

  window.obj = {foo:foo,bar:bar}
})()

