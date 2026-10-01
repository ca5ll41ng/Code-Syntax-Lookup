---
id: "zh-php-function-yac-set"
language: "php"
lang: "zh"
category: "function"
name: "Yac::set"
title: "向缓存中存储一个值"
signature: "public bool Yac::set(string|array $key, mixed $value, int $ttl = 0)"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向缓存中存储一个值

## 说明

```php
public bool Yac::set(string|array $key, mixed $value, int $ttl = 0)
```

```php
public bool Yac::set(array $values, int $ttl = 0)
```

向缓存中存储一个值。如果键已存在，则覆盖已有条目，无论其是否已过期。

## 参数

- **`$key`** — `string` 类型的键，或者一个由 `key => value` 键值对组成的 `array`，一次调用存储多个条目。
- **`$value`** — 要存储的值。除 `resource` 外的所有 PHP 类型都可以存储。仅在单键形式下使用；当 `$key` 是数组时，该参数位置实际上是可选的 `$ttl`。
- **`$ttl`** — 生存时间，单位为秒。`0` 表示条目永不因时间过期。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

**`Yac::set()` 示例**

```php


<?php
$yac = new Yac();

$yac->set("foo", "bar");                    // 存储单个值
$yac->set("foo", "baz");                    // 覆盖已有条目
?>

   
```

**存储带 TTL 的条目**

```php


<?php
$yac = new Yac();

// ttl 以秒为单位：该条目 5 秒后过期
$yac->set("short-lived", "value", 5);
sleep(6);
var_dump($yac->get("short-lived"));        // bool(false)：已过期
?>

   
```

**一次存储多个条目**

```php


<?php
$yac = new Yac();

// 一次调用存储多个键值对
$yac->set(array("a" => 1, "b" => 2));
?>

   
```

## 参见

`Yac::add()` `Yac::get()` `Yac::__set()`
