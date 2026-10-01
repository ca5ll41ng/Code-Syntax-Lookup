---
id: "zh-php-syntax-class-closure"
language: "php"
lang: "zh"
category: "syntax"
name: "class.closure"
title: "Closure 类"
module: "language"
source_url: "https://www.php.net/manual/zh/class.closure.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closure 类

Closure

   简介  用于代表 匿名函数 的类.    匿名函数会产生这种类型的对象。这个类带有一些方法允许在匿名函数创建后对其进行更多的控制。    除了此处列出的方法，还有一个 `__invoke` 方法。这是为了与其他实现了 __invoke()魔术方法 的对象保持一致性，但调用匿名函数的过程与它无关。      类摘要    `final` `Closure`  方法       更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在 `Closure::__debugInfo()` 的输出包含 closure 的名称、行数和文件名。 |

   注释 
> `Closure` 对象不能被序列化，因为闭包可能包含绑定变量和特定的执行上下文。 尝试序列化闭包将抛出 Exception。
