---
id: "zh-php-function-function-prev"
language: "php"
lang: "zh"
category: "function"
name: "prev"
title: "将数组的内部指针倒回一位"
signature: "mixed prev(array|object $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.prev.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将数组的内部指针倒回一位

## 说明

```php
mixed prev(array|object $array)
```

将数组的内部指针倒回一位。

`prev()` 和 `next()` 的行为类似，只除了它将内部指针倒回一位而不是前移一位。

## 参数

- **`$array`** — 输入数组。

## 返回值

返回数组内部指针指向的前一个单元的值，或当没有更多单元时返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用在 `object` 上调用此函数。 要么首先使用 `get_mangled_object_vars()` 将 `object` 转换为 `array`，要么使用实现 Iterator 的类提供的方法，例如 `ArrayIterator`。 |
| 7.4.0 | SPL 类的实例现在被视为没有属性的空对象，而不是调用与此函数同名的 Iterator 方法。 |

## 示例

**`prev()` 及相关函数用法示例**

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

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

> 很难区分是遇到 `boolean` `false` 单元还是遇到了数组的开头。 需要用 `key()` 检查 `prev()` 数组， 是否为 `null` 来作区分。

## 参见

`current()` `end()` `next()` `reset()` `each()`
