---
id: "zh-php-function-function-apcu-store"
language: "php"
lang: "zh"
category: "function"
name: "apcu_store"
title: "缓存一个变量到存储中"
signature: "bool apcu_store(string $key, mixed $var, int $ttl = 0)"
module: "apcu"
source_url: "https://www.php.net/manual/zh/function.apcu-store.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 缓存一个变量到存储中

## 说明

```php
bool apcu_store(string $key, mixed $var, int $ttl = 0)
```

```php
array apcu_store(array $values, mixed $unused = NULL, int $ttl = 0)
```

缓存一个变量到存储中。

> 与 PHP 中常见的变量生命周期不同的是，通过 `apcu_store()` 存储的变量可以在多个 request 之间共享（直到该变量从 cache 中被删除）。

## 参数

- **`$key`** — 使用此名称存储变量。`$key` 是唯一的，因此当多次使用同样的 `$key` 存储变量时，后一次会覆盖前一次的值。
- **`$var`** — 被存储的变量
- **`$ttl`** — 变量生存时间（Time To Live）；被存储的 `$var` 经过 `$ttl` 秒后，会从存储中被删除（下一次请求时）。如果没提供 `$ttl` （或 `$ttl` 为 `0` ），该变量会一直存在直到手动删除它，或者其他原因导致该变量从缓存中消失（清除，重启等等。）。
- **`$values`** — 数组索引作为 key，数组值作为被存储的 var。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 第二种语法返回包含存储失败的 key 的数组。

## 示例

**`apcu_store()` 示例**

```php


<?php
$bar = 'BAR';
apcu_store('foo', $bar);
var_dump(apcu_fetch('foo'));
?>

   
```

以上示例会输出：

```text


string(3) "BAR"

   
```

## 参见

 `apcu_add()` `apcu_fetch()` `apcu_delete()`
