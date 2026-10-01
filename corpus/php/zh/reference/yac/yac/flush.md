---
id: "zh-php-function-yac-flush"
language: "php"
lang: "zh"
category: "function"
name: "Yac::flush"
title: "清空缓存"
signature: "public bool Yac::flush()"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清空缓存

## 说明

```php
public bool Yac::flush()
```

删除所有缓存的值。由于缓存由同一台机器上的所有进程共享， 这会全局清空缓存；传给 `Yac::__construct()` 的键前缀不会限制清空的范围。

## 参数

此函数没有参数。

## 返回值

返回 `true`。

## 示例

**`Yac::flush()` 示例**

```php


<?php
$yac = new Yac();
$yac->set("foo", "bar");

$other = new Yac("app2_");
$other->set("baz", "qux");

// flush 会清空整个缓存：所有实例的条目，
// 无论存储时使用了什么前缀
$yac->flush();

var_dump($yac->get("foo"));   // bool(false)
var_dump($other->get("baz")); // bool(false)
?>

   
```

## 参见

`Yac::delete()` `Yac::info()`
