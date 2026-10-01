---
id: "zh-php-function-yac-get"
language: "php"
lang: "zh"
category: "function"
name: "Yac::get"
title: "从缓存中取值"
signature: "public mixed Yac::get(string|array $key, mixed $default = null)"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从缓存中取值

## 说明

```php
public mixed Yac::get(string|array $key, mixed $default = null)
```

从缓存中取值。

## 参数

- **`$key`** — `string` 类型的键，或者由键组成的 `array`。
- **`$default`** — 当请求的键（或多个键）不在缓存中时返回的值，自 yac 2.4.0 起可用。省略时，未命中返回 `false`。
  > 在 yac 2.4.0 之前，该参数位置是一个引用形式的 `$cas` 令牌，而不是默认值。传递过或依赖该令牌的代码在升级到 2.4.0 时必须更新。



## 返回值

对于 `string` 类型的键，命中时返回缓存的值，否则返回 `$default`（未指定默认值时返回 `false`）。

对于由键组成的 `array`，返回一个数组，其中包含所有命中的值，以各自的键为索引。自 yac 2.4.0 起，不在缓存中的键会被直接忽略（若指定了 `$default`，则用默认值填充）；在 2.4.0 之前，每个缺失的键都会插入一个 `false` 占位值。

## 示例

**`Yac::get()` 示例**

```php


<?php
$yac = new Yac();

$yac->set("foo", "bar");
var_dump($yac->get("foo"));                 // string(3) "bar"
var_dump($yac->get("missing"));             // bool(false)：未命中
?>

   
```

**区分存进去的 false 和未命中**

```php


<?php
$yac = new Yac();

// 没有默认值时，未命中和存了 false 无法区分；
// 哨兵默认值（自 yac 2.4.0 起可用）可以区分二者
$yac->set("flag", false);
var_dump($yac->get("flag"));                // bool(false)：存的就是这个值
var_dump($yac->get("missing", false));      // bool(false)：未命中，形态相同
var_dump($yac->get("flag", "__NONE__"));    // bool(false)：存的就是这个值
var_dump($yac->get("missing", "__NONE__")); // string(8) "__NONE__"：未命中
?>

   
```

**一次获取多个键**

```php


<?php
$yac = new Yac();

$yac->set("foo", "bar");
$yac->set("foo2", "bar2");

// 传入键数组时，结果中只包含命中的键
var_dump($yac->get(array("foo", "foo2", "missing")));
// array(2) { ["foo"]=> string(3) "bar" ["foo2"]=> string(4) "bar2" }
?>

   
```

## 参见

`Yac::set()` `Yac::__get()`
