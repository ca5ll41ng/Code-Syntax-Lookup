---
id: "zh-php-function-function-next"
language: "php"
lang: "zh"
category: "function"
name: "next"
title: "将数组中的内部指针向前移动一位"
signature: "mixed next(array|object $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组中的内部指针向前移动一位

## 说明

```php
mixed next(array|object $array)
```

`next()` 和 `current()` 的行为类似，只有一点区别，在返回值之前将内部指针向前移动一位。这意味着它返回的是下一个数组单元的值并将数组指针向前移动了一位。

## 参数

- **`$array`** — 受影响的 `array`。

## 返回值

返回数组内部指针指向的下一个单元的值，或当没有更多单元时返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用在 `object` 上调用此函数。 要么首先使用 `get_mangled_object_vars()` 将 `object` 转换为 `array`，要么使用实现 Iterator 的类提供的方法，例如 `ArrayIterator`。 |
| 7.4.0 | SPL 类的实例现在被视为没有属性的空对象，而不是调用与此函数同名的 Iterator 方法。 |

## 示例

**`next()` 及相关函数的用法示例**

```php


<?php
$transport = array('foot', 'bike', 'car', 'plane');
echo $mode = current($transport), PHP_EOL; // $mode = 'foot';
echo $mode = next($transport), PHP_EOL;    // $mode = 'bike';
echo $mode = next($transport), PHP_EOL;    // $mode = 'car';
echo $mode = prev($transport), PHP_EOL;    // $mode = 'bike';
echo $mode = end($transport), PHP_EOL;     // $mode = 'plane';
?>

    
```

## 注释

> 很难区别是到了数组尾部还是元素为 `bool` `false` 。要正确遍历可能含有 `false` 单元的数组，参见 `foreach` 函数。
>
> 仍要使用 `next()` 并正确检测是否到了数组尾部，需要检查 `key()` 是否为 `null`。

## 参见

`current()` `end()` `prev()` `reset()` `each()`
