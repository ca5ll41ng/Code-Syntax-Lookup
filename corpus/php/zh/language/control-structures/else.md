---
id: "zh-php-syntax-control-structures-else"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.else"
title: "else"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.else.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# else

经常需要在满足某个条件时执行一条语句，而在不满足该条件时执行其它语句，这正是 `else` 的功能。`else` 延伸了 `if` 语句，可以在 `if` 语句中的表达式的值为 `false` 时执行语句。例如以下代码在 `$a` 大于 `$b` 时显示 `a is bigger than b`，反之则显示 `a is NOT bigger than b`： ```php <?php if ($a > $b) { echo "a is greater than b"; } else { echo "a is NOT greater than b"; } ?> ``` `else` 语句仅在 `if` 以及 `elseif`（如果有的话）语句中的表达式的值为 `false` 时执行（参见 elseif）。

> 悬挂的 else
>
> 在多层嵌套 `if`-`else` 语句的情况下， `else` 总是与最近的 `if` 进行关联。 ```php <?php $a = false; $b = true; if ($a) if ($b) echo "b"; else echo "c"; ?> ``` 虽然存在缩进（对 PHP 来说，无关紧要）， 但是 `else` 还是与 `if ($b)` 进行关联，所以以上示例不会产生任何输出。虽然可以依赖此特性，但是推荐使用花括号，避免潜在的歧义问题。
