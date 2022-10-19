function fibonacci(n) {
  return n<3 ? 1 :  fibonacci(n-2) + fibonacci(n-1)
}

addEventListener('message',function (event) {
  var n = event.data
  var result = fibonacci(n)
  postMessage(result)
})