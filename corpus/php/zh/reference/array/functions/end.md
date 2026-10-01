---
id: "zh-php-function-function-end"
language: "php"
lang: "zh"
category: "function"
name: "end"
title: "将数组的内部指针指向最后一个单元"
signature: "mixed end(array|object $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.end.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组的内部指针指向最后一个单元

## 说明

```php
mixed end(array|object $array)
```

`end()` 将 `$array` 的内部指针移动到最后一个单元并返回其值。

## 参数

- **`$array`** — 这个数组。 该数组是通过引用传递的，因为它会被这个函数修改。 这意味着你必须传入一个真正的变量，而不是函数返回的数组，因为只有真正的变量才能以引用传递。

## 返回值

返回最后一个元素的值，或者如果是空数组则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用在 `object` 上调用此函数。 要么首先使用 `get_mangled_object_vars()` 将 `object` 转换为 `array`，要么使用实现 Iterator 的类提供的方法，例如 `ArrayIterator`。 |
| 7.4.0 | SPL 类的实例现在被视为没有属性的空对象，而不是调用与此函数同名的 Iterator 方法。 |

## 示例

**`end()` 例子**

```php


<?php

$fruits = array('apple', 'banana', 'cranberry');
echo end($fruits); // cranberry

?>

    
```

## 参见

`current()` `each()` `prev()` `reset()` `next()` `array_key_last()`
