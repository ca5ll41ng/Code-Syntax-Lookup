---
id: "zh-php-syntax-language-types-iterable"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.iterable"
title: "Iterable 可迭代对象"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.iterable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Iterable 可迭代对象

`Iterable` 是内置编译时 `array|Traversable` 的类型别名。从 PHP 7.1.0 到 PHP 8.2.0 之间的描述来看，`iterable` 是内置伪类型，充当上述类型别名，也可以用于类型声明。iterable 类型可用于  或在生成器中使用 yield from。

> 将可迭代对象声明为返回类型的函数也可能是 生成器。
>
> **可迭代生成器返回类型的示例**
>
> ```php
>
>
> <?php
>
> function gen(): iterable {
>     yield 1;
>     yield 2;
>     yield 3;
> }
>
> foreach(gen() as $value) {
>     echo $value, "\n";
> }
> ?>
>
>     
> ```
