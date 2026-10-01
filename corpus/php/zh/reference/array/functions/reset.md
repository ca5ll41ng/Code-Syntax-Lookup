---
id: "zh-php-function-function-reset"
language: "php"
lang: "zh"
category: "function"
name: "reset"
title: "将数组的内部指针指向第一个单元"
signature: "mixed reset(array|object $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组的内部指针指向第一个单元

## 说明

```php
mixed reset(array|object $array)
```

`reset()` 将 `$array` 的内部指针倒回到第一个单元并返回第一个数组单元的值。

## 参数

- **`$array`** — 输入的数组。

## 返回值

返回数组第一个单元的值，如果数组为空则返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用在 `object` 上调用此函数。 要么首先使用 `get_mangled_object_vars()` 将 `object` 转换为 `array`，要么使用实现 Iterator 的类提供的方法，例如 `ArrayIterator`。 |
| 7.4.0 | SPL 类的实例现在被视为没有属性的空对象，而不是调用与此函数同名的 Iterator 方法。 |

## 示例

**`reset()` 例子**

```php


<?php

$array = array('step one', 'step two', 'step three', 'step four');

// 默认情况下，指针指向第一个元素
echo current($array) . "<br />\n"; // "step one"

// 跳过两步
next($array);
next($array);
echo current($array) . "<br />\n"; // "step three"

// 重置指针，重新指向第一个元素
reset($array);
echo current($array) . "<br />\n"; // "step one"

?>

    
```

## 注释

> 返回的值无法区分是空数组，还是第一个元素是 `bool` `false`。 要正确检测数组第一个元素包含 `false` 的情况，首先要检测数组 `count()`， 或在调用 `reset()` 后检测 `key()` 不为 `null`。

## 参见

`current()` `each()` `end()` `next()` `prev()` `array_key_first()`
