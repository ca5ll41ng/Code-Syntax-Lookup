---
id: "zh-php-guide-class-pool"
language: "php"
lang: "zh"
category: "guide"
name: "class.pool"
title: "Pool 类"
module: "pthreads"
source_url: "https://www.php.net/manual/zh/class.pool.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Pool 类

Pool

   简介  Pool 对象是多个 Worker 对象的容器，同时也是它们的控制器。    线程池是对 Worker 功能的高层抽象，包括按照 pthreads 需要的方式来管理应用的功能。      类摘要   `Pool`    `Pool`    属性  `protected` `size`   `protected` `class`   `protected` `workers`   `protected` `ctor`   `protected` `last`  方法        属性 
- **`size`** — Pool 对象可容纳的 Worker 对象的最大数量
- **`class`** — Worker 的类
- **`workers`** — 指向 Worker 对象的引用
- **`ctor`** — 构造新的 Worker 对象时所需的参数
- **`last`** — 最后使用的 Worker 对象在池中的位置偏移量
