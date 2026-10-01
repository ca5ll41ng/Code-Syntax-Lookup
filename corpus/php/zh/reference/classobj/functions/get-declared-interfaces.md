---
id: "zh-php-function-function-get-declared-interfaces"
language: "php"
lang: "zh"
category: "function"
name: "get_declared_interfaces"
title: "返回一个数组包含所有已声明的接口"
signature: "array get_declared_interfaces()"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-declared-interfaces.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个数组包含所有已声明的接口

## 说明

```php
array get_declared_interfaces()
```

返回一个数组包含所有已声明的接口。

## 参数

此函数没有参数。

## 返回值

本函数返回一个数组，其内容是当前脚本中所有已声明的接口的名字。

## 示例

**`get_declared_interfaces()` 示例**

```php


<?php
print_r(get_declared_interfaces());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => Traversable
    [1] => IteratorAggregate
    [2] => Iterator
    [3] => ArrayAccess
    [4] => reflector
    [5] => RecursiveIterator
    [6] => SeekableIterator
)

    
```

## 参见

`interface_exists()` `get_declared_classes()` `class_implements()`
