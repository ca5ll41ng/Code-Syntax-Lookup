---
id: "zh-php-function-yac-add"
language: "php"
lang: "zh"
category: "function"
name: "Yac::add"
title: "存储一个值，但不覆盖已有条目"
signature: "public bool Yac::add(string|array $key, mixed $value, int $ttl = 0)"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 存储一个值，但不覆盖已有条目

## 说明

```php
public bool Yac::add(string|array $key, mixed $value, int $ttl = 0)
```

```php
public bool Yac::add(array $values, int $ttl = 0)
```

向缓存中存储一个值。与 `Yac::set()` 不同，它不会覆盖仍然有效的已有条目；遇到这种情况时存储会被拒绝。

## 参数

- **`$key`** — `string` 类型的键，或者一个由 `key => value` 键值对组成的 `array`，一次调用存储多个条目。
- **`$value`** — 要存储的值。除 `resource` 外的所有 PHP 类型都可以存储。仅在单键形式下使用；当 `$key` 是数组时，该参数位置实际上是可选的 `$ttl`。
- **`$ttl`** — 生存时间，单位为秒。`0` 表示条目永不因时间过期。

## 返回值

成功时返回 `true`，失败时返回 `false`。当键已存在且未过期时，存储同样会被拒绝（返回 `false`）。

## 示例

**`Yac::add()` 示例**

```php


<?php
$yac = new Yac();

var_dump($yac->add("foo", "bar"));          // bool(true)
var_dump($yac->add("foo", "baz"));          // bool(false)："foo" 已存在
?>

   
```

**添加带 TTL 的条目**

```php


<?php
$yac = new Yac();

// ttl 以秒为单位；0（默认值）表示条目永不过期
$yac->add("short-lived", "value", 5);
sleep(6);
var_dump($yac->get("short-lived"));        // bool(false)：已过期
?>

   
```

**一次添加多个条目**

```php


<?php
$yac = new Yac();

// 一次调用存储多个键值对，并指定 ttl
$yac->add(array("a" => 1, "b" => 2), 60);
?>

   
```

## 参见

`Yac::set()` `Yac::get()` `Yac::delete()`
