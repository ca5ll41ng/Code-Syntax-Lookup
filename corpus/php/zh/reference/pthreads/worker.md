---
id: "zh-php-guide-class-worker"
language: "php"
lang: "zh"
category: "guide"
name: "class.worker"
title: "Worker 类"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/class.worker.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Worker 类

Worker

   简介  Worker 是一个具有持久化上下文的线程对象，通常用来在多个线程中使用。    当一个 Worker 对象开始之后，会执行它的 run 方法，但是即使 run 方法执行完毕，线程本身也不会消亡，除非遇到以下情况：   
- Worker 对象超出作用范围（没有指向它的引用了）
- 代码调用了 Worker 对象的 shutdown 方法
- 整个脚本终止了

  这意味着程序员可以在程序执行过程中重用这个线程上下文： 在 Worker 对象的栈中添加对象会激活 Worker 对象执行被加入对象的 run 方法。      类摘要   `Worker`    `Worker`   `extends` `Thread`   Traversable   Countable   ArrayAccess    方法  继承的方法
