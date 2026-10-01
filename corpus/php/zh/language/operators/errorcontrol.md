---
id: "zh-php-syntax-language-operators-errorcontrol"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.errorcontrol"
title: "错误控制运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.errorcontrol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 错误控制运算符

错误控制

PHP 支持一个错误控制运算符：`@`。当将其放置在一个 PHP 表达式之前，该表达式可能产生的任何错误诊断都被抑制。

如果用 `set_error_handler()` 设定了自定义的错误处理函数，即使诊断信息被抑制，也仍然会被调用。

> PHP 8.0.0 之前，如果错误被 `@` 运算符抑制，则在自定义错误处理程序中调用 `error_reporting()` 将始终返回 `0`。PHP 8.0.0 起，返回（按位）表达式的值：`E_ERROR | E_CORE_ERROR | E_COMPILE_ERROR | E_USER_ERROR | E_RECOVERABLE_ERROR | E_PARSE`。

`error_get_last()` 返回数组中的 `"message"` 元素储存了表达式产生的任意错误信息。 此函数的返回结果会随着每次错误的发生而相应变化，所以需要尽早检查。

**故意文件错误**

```php


<?php
$my_file = @file ('non_existent_file') or
    die ("Failed opening file: error was '" . error_get_last()['message'] . "'");
?>

   
```

**表达式抑制**

```php


<?php
// 这适用于所有表达式，而不仅仅是函数：
$value = @$cache[$key];
// 如果索引 $key 不存在，则不会发出通知。
?>

   
```

> `@` 运算符只对 表达式 有效。 对新手来说一个简单的规则就是：如果能从某处获得值，就能在它前面加上 `@` 运算符。例如，可以把它放在变量，函数调用，某些语言构造调用（例如 `include()` ）等等之前。 不能把它放在函数或类的定义之前，也不能用于条件结构例如 `if` 和  等。

> PHP 8.0.0 之前，`@` 运算符会禁用导致脚本停止运行的严重错误。 例如在调用一个不存在的函数前添加 `@`，由于函数不可用或者输入错误， 将会导致脚本终止，而不会说明原因。

### 参见

`error_reporting()` 错误处理与日志记录函数
