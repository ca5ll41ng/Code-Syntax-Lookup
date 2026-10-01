---
id: "zh-php-function-function-current"
language: "php"
lang: "zh"
category: "function"
name: "current"
title: "返回数组中的当前值"
signature: "mixed current(array|object $array)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回数组中的当前值

## 说明

```php
mixed current(array|object $array)
```

每个数组中都有一个内部的指针指向它“当前的”单元，初始化时会指向该数组中的第一个值。

## 参数

- **`$array`** — 要操作的数组。

## 返回值

`current()` 函数返回当前被内部指针指向的数组单元的值，并不移动指针。如果内部指针指向超出了单元列表的末端，`current()` 将返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 弃用在 `object` 上调用此函数。 要么首先使用 `get_mangled_object_vars()` 将 `object` 转换为 `array`，要么使用实现 Iterator 的类提供的方法，例如 `ArrayIterator`。 |
| 7.4.0 | SPL 类的实例现在被视为没有属性的空对象，而不是调用与此函数同名的 Iterator 方法。 |

## 示例

**`current()` 函数使用示例**

```php


<?php
$transport = array('foot', 'bike', 'car', 'plane');
echo $mode = current($transport), PHP_EOL; // $mode = 'foot';
echo $mode = next($transport), PHP_EOL;    // $mode = 'bike';
echo $mode = current($transport), PHP_EOL; // $mode = 'bike';
echo $mode = prev($transport), PHP_EOL;    // $mode = 'foot';
echo $mode = end($transport), PHP_EOL;     // $mode = 'plane';
echo $mode = current($transport), PHP_EOL; // $mode = 'plane';

$arr = array();
var_dump(current($arr)); // bool(false)

$arr = array(array());
var_dump(current($arr)); // array(0) { }
?>

    
```

## 注释

> 在一个空数组上使用 `current()` 函数，和在一个内部指针指向单元末端以外的数组上使用此函数，结果是相同的，同样都会返回 `bool` `false`。如果希望正确遍历一个包含 `false` 的数组，请参阅  控制结构。
>
> 如果仍然希望使用 `current()` 来判断数组单元真实的值，应该同时使用 `key()` 和 `current()` 来检查当前元素是否为 `null`。

## 参见

`end()` `key()` `each()` `prev()` `reset()` `next()`
