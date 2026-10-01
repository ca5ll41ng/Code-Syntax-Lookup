---
id: "zh-php-function-function-spl-object-hash"
language: "php"
lang: "zh"
category: "function"
name: "spl_object_hash"
title: "返回指定对象的 hash id"
signature: "string spl_object_hash(object $object)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-object-hash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定对象的 hash id

## 说明

```php
string spl_object_hash(object $object)
```

本函数为对象返回唯一标识符。只要对象没有销毁，这个 id 可用作保存对象的散列键，或者用于标识对象。一旦对象销毁，它的散列值可能会被其它对象重用。此行为类似为 `spl_object_id()`。

## 参数

- **`$object`** — 任何对象。

## 返回值

字符串，对于当前存在的每个对象都是唯一的，且对同一个对象始终相同。

## 示例

**A `spl_object_hash()` 示例**

```php


<?php
$id = spl_object_hash($object);
$storage[$id] = $object;
?>

    
```

## 注释

> 当对象销毁后，它的散列值可能会被其它对象重用。

> 对象散列应该使用 === 和 !== 标识符比较，因为返回的散列可能是数字字符串。例如：`0000000000000e600000000000000000`。

## 参见

`spl_object_id()`
