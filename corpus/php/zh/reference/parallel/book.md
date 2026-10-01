---
id: "zh-php-guide-book-parallel"
language: "php"
lang: "zh"
category: "guide"
name: "book.parallel"
title: "parallel"
module: "parallel"
source_url: "https://www.php.net/manual/zh/book.parallel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# parallel

parallel

 简介  parallel 是适用于 PHP ≥ 7.2.0 的并行并发扩展。自 parallel 1.2.0 起，要求 PHP ≥ 8.0.0。    下面是并行核心概念的简要描述，更多详细信息可以在手册的这一节中找到。    Runtime  `parallel\Runtime` 表示 PHP 解释器线程。将可选的 bootstrap 文件传递给 `parallel\Runtime::__construct()` 可用于配置 `parallel\Runtime`，这通常是自动加载器或者一些其它预加载程序：引导文件将在任何任务执行之前加载。    构造之后，`parallel\Runtime` 在 PHP 对象正常作用域规则关闭、杀死或者销毁之前一直可用。`parallel\Runtime::run()` 允许程序员安排并行执行的任务。`parallel\Runtime` 有 FIFO 调度，任务将按照调度的顺序执行。     功能性 API  Parallel 在 `parallel\Runtime` 之上实现了一个功能性的、更高级别的 API，提供了单一函数入口点来通过自动调度执行并行代码：`parallel\run()`。     Task  Task 只是用于并行执行的 `Closure`。`Closure` 几乎可以包含任何指令，包含嵌套闭包。但是 task 中禁止使用一些指令： 
- yield
- 使用引用
- 声明类
- 声明命名函数

   
> 嵌套闭包可以 yield 或使用引用，但不得包含类声明或命名函数声明。

 
> Task 可能 include 的文件不禁止任何指令。

   Future  `parallel\Future` 用于访问 task 的返回值，并公开用于取消任务的 API。     Channel  Task 可以通过参数调用，使用词法作用域变量（按值）和返回值（通过 `parallel\Future`），但这些仅允许单向通信：它们允许程序员将数据发送到 task 中并从 task 中检索数据，但不允许 task 之间进行双向通信。`parallel\Channel` API 允许 task 之间进行双向通信，`parallel\Channel` 是 task 之间类似套接字的链接，程序员可以用于发送和接收数据。     Events  `parallel\Events` API 实现了原生特性（`Traversable`）事件循环，和 `parallel\Events::poll()` 方法。允许程序员使用 channel 和 future 组合。程序员只需将 channel 和 future 添加到事件循环中，可以选择使用 `parallel\Events::setInput()` 设置用于写入的 input。然后进入 foreach：当对象可用时，parallel 将从这些对象中读取和写入数据，同时生成描述已经发生的操作的 `parallel\Events\Event` 对象。     参见  `philosophy.parallel`
