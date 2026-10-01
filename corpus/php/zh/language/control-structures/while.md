---
id: "zh-php-syntax-control-structures-while"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.while"
title: "while"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.while.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# while

`while` 循环是 PHP 中最简单的循环类型。它和 C 语言中的 `while` 表现地一样。`while` 语句的基本格式是： ```text while (expr) statement ```

`while` 语句的含意很简单，它告诉 PHP 只要 `while` 表达式的值为 `true` 就重复执行嵌套中的循环语句。表达式的值在每次开始循环时检查，所以即使这个值在循环语句中改变了，语句也不会停止执行，直到本次循环结束。 如果 `while` 表达式的值一开始就是 `false`，则循环语句一次都不会执行。

和 `if` 语句一样，可以在 `while` 循环中用花括号括起一个语句组，或者用替代语法： ```text while (expr): statement ... endwhile; ```

下面两个例子完全一样，都显示数字 1 到 10： ```php <?php /* 示例 1 */ $i = 1; while ($i <= 10) { echo $i++; /* 在自增前（后自增）打印的值将会是 $i */ } /* 示例 2 */ $i = 1; while ($i <= 10): print $i; $i++; endwhile; ?> ```
