---
id: "zh-php-function-function-defined"
language: "php"
lang: "zh"
category: "function"
name: "defined"
title: "检查给定名称的常量是否存在"
signature: "bool defined(string $constant_name)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.defined.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查给定名称的常量是否存在

## 说明

```php
bool defined(string $constant_name)
```

检查给定 `$constant_name` 的常量是否已定义。

此函数也可以跟类常量和 Enum 枚举 一起工作。

> 如果你要检查一个变量是否存在，请使用 `isset()`。 `defined()` 函数仅对 常量 有效。如果你要检测某个函数是否存在，使用 `function_exists()`。

## 参数

- **`$constant_name`** — 常量的名称。

## 返回值

如果名称 `$constant_name` 的常量已定义，返回 `true`；未定义则返回 `false`。

## 示例

**检查常量**

```php


<?php

/* 注意引号的使用，这很重要。这个例子是检查
 * 如果字符串 'TEST' 是 TEST 常量的名称 */
if (defined('TEST')) {
    echo TEST;
}


interface bar {
    const test = 'foobar!';
}

class foo {
    const test = 'foobar!';
}

var_dump(defined('bar::test')); // bool(true)
var_dump(defined('foo::test')); // bool(true)

?>

    
```

**检测 Enum Cases（自 PHP 8.1.0 起）**

```php


<?php

enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

var_dump(defined('Suit::Hearts')); // bool(true)

?>

    
```

## 参见

`define()` `constant()` `get_defined_constants()` `function_exists()` 关于常量的章节
