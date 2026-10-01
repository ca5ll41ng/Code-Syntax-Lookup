---
id: "zh-php-guide-class-yaf-session"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-session"
title: "Yaf_Session 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-session.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Session 类

Yaf_Session

   简介  `Yaf_Session` 是对 PHP 原生 session 支持的带命名空间的封装。 它通过 `Yaf_Session::getInstance()` 以单例方式访问， 并直接作用于 `$_SESSION`： 通过任一接口写入的 session 数据在另一接口中同样可见。    Session 项可以通过属性语法、方法调用 （`Yaf_Session::get()`、 `Yaf_Session::set()`、 `Yaf_Session::del()`、 `Yaf_Session::has()`）、数组访问 （`ArrayAccess`）、迭代 （`Iterator`）以及 `count()` 来访问和操作。      类摘要   `Yaf_Session`    `Yaf_Session`   Iterator   ArrayAccess   Countable    属性  `protected` `static` `_instance`   `protected` `_session`   `protected` `_started`  方法        属性 
- **`_instance`**
- **`_session`**
- **`_started`**
