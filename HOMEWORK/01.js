/*
  一、
    1、JS是单线程的，同一时刻只能运行特定代码，并阻塞其他代码。如果想异步编程，就需要用到回调函数，但是回调函数的缺点也很明显，就是存在错误处理和嵌套的副作用。
      所以为了解决“回调地狱”的问题才衍生出了Promise、Generator、async/await的解决方案。

    2、EventLoop：
      js是单线程的，但运行时分为同步任务和异步任务。主线程运行的时候产生堆和栈，栈中的代码调用各种外部api，
      它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。
      执行栈中的代码（同步任务），总是在读取"任务队列"（异步任务）之前执行。
    3、消息队列：
      也称为任务队列，是一个先进先出的队列，它里面存放着各种消息，即异步操作的回调函数，异步操作会将相关回调添加到任务队列中，
      而不同的异步操作添加到任务队列的时机也不同，如onclick，setTimeout，ajax处理的方式都不同，这些异步操作都是由浏览器内核的不同模块来执行的。
    4、宏任务和微任务
        在挂起任务时，JS 引擎会将所有任务按照类别分到这两个队列中，首先在 宏任务 的队列中取出第一个任务，
        执行完毕后取出 微任务 队列中的所有任务顺序执行；之后再取宏任务，周而复始，直至两个队列的任务都取完。
*/