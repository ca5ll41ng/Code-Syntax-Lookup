---
id: "zh-php-function-function-spl-classes"
language: "php"
lang: "zh"
category: "function"
name: "spl_classes"
title: "返回所有可用的SPL类"
signature: "array spl_classes()"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-classes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回所有可用的SPL类

## 说明

```php
array spl_classes()
```

本函数返回当前所有可用的 SPL 类的数组。

## 参数

此函数没有参数。

## 返回值

Returns an `array` containing the currently available SPL classes.

## 示例

**`spl_classes()` example**

```php


<?php

print_r(spl_classes());

?>

    
```

以上示例的输出类似于：

```text


Array
(
    [ArrayObject] => ArrayObject
    [ArrayIterator] => ArrayIterator
    [CachingIterator] => CachingIterator
    [RecursiveCachingIterator] => RecursiveCachingIterator
    [DirectoryIterator] => DirectoryIterator
    [FilterIterator] => FilterIterator
    [LimitIterator] => LimitIterator
    [ParentIterator] => ParentIterator
    [RecursiveDirectoryIterator] => RecursiveDirectoryIterator
    [RecursiveIterator] => RecursiveIterator
    [RecursiveIteratorIterator] => RecursiveIteratorIterator
    [SeekableIterator] => SeekableIterator
    [SimpleXMLIterator] => SimpleXMLIterator
)

    
```
