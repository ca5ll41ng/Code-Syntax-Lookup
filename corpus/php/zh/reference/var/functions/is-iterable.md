---
id: "zh-php-function-function-is-iterable"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_iterable"
title: "验证变量的内容是否为可迭代值"
signature: "bool is_iterable(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-iterable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证变量的内容是否为可迭代值

## 说明

```php
bool is_iterable(mixed $value)
```

验证变量的内容是否被 `iterable` 伪类型接受，即不是 `array`，就是实现了 `Traversable` 接口的对象。

## 参数

- **`$value`** — 验证的值

## 返回值

如果 `$value` 可迭代返回 `true`，否则返回 `false`。

## 示例

**`is_iterable()` 示例**

```php


<?php

var_dump(is_iterable([1, 2, 3]));  // bool(true)
var_dump(is_iterable(new ArrayIterator([1, 2, 3])));  // bool(true)
var_dump(is_iterable((function () { yield 1; })()));  // bool(true)
var_dump(is_iterable(1));  // bool(false)
var_dump(is_iterable(new stdClass()));  // bool(false)

?>

    
```

## 参见

`is_array()`
