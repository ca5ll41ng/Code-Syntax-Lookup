---
id: "zh-php-syntax-class-traversable"
language: "php"
lang: "zh"
category: "syntax"
name: "class.traversable"
title: "Traversable （遍历）接口"
module: "language"
source_url: "https://www.php.net/manual/zh/class.traversable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Traversable （遍历）接口

Traversable

   简介  检测一个类是否可以使用  进行遍历的接口。    无法被单独实现的基本抽象接口。相反，它必须由 IteratorAggregate 或 Iterator 接口实现。      接口摘要    Traversable     这个接口没有任何方法，它的作用仅仅是作为所有可遍历类的基本接口。     更新日志 
| 版本 | 说明 |
| --- | --- |
| 7.4.0 | Traversable 接口现在可以由抽象类实现。继承的类必须实现 Iterator 或 IteratorAggregate。 |

   注释 
> 实现此接口的内置类可以使用  进行遍历而无需实现 IteratorAggregate 或 Iterator 接口。

 
> 在 PHP 7.4.0 之前，这个内部引擎接口无法在 PHP 脚本中实现。必须改用 IteratorAggregate 或 Iterator。
