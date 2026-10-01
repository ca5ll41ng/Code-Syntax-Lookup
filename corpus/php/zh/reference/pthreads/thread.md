---
id: "zh-php-guide-class-thread"
language: "php"
lang: "zh"
category: "guide"
name: "class.thread"
title: "Thread 类"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/class.thread.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Thread 类

Thread

   简介  当调用 Thread 对象的 start 方法时，该对象的 run 方法中的代码将在独立线程中并行执行。    run 方法中的代码执行完毕之后，独立线程立即退出，并且等待合适的时机由创建者线程加入（join）。   
> 依赖于引擎本身的机制检测何时加入线程可能引发非预期的行为，程序员应该尽可能的显式控制线程加入的时机。

    类摘要   `Thread`    `Thread`   `extends` `Threaded`   Countable   Traversable   ArrayAccess    方法  继承的方法
