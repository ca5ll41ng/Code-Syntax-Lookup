---
id: "zh-php-function-function-apcu-add"
language: "php"
lang: "zh"
category: "function"
name: "apcu_add"
title: "缓存一个新变量到存储中"
signature: "bool apcu_add(string $key, mixed $var, int $ttl = 0)"
module: "apcu"
source_url: "https://www.php.net/manual/zh/function.apcu-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 缓存一个新变量到存储中

## 说明

```php
bool apcu_add(string $key, mixed $var, int $ttl = 0)
```

```php
array apcu_add(array $values, mixed $unused = NULL, int $ttl = 0)
```

将一个从未被缓存过的变量添加到到存储中。

> 与 PHP 中常见的变量生命周期不同的是，通过 `apcu_add()` 存储的变量可以在多个 request 之间共享（直到该变量从 cache 中被删除）。

## 参数

- **`$key`** — 使用此名称存储变量。`$key` 必须是唯一的，因此如果用 `apcu_add()` 存储变量时指定的 key 已经存在， 就会直接返回 `false`，不会覆写已有的数据。（这也是 `apcu_add()` 和 `apcu_store()` 之间唯一的区别。）
- **`$var`** — 被存储的变量
- **`$ttl`** — 变量生存时间（Time To Live）；被存储的 `$var` 经过 `$ttl` 秒后，会从存储中被删除（下一次请求时）。如果没提供 `$ttl` （或 `$ttl` 为 `0` ），该变量会一直存在直到手动删除它，或者其他原因导致该变量从缓存中消失（清除，重启等等。）。
- **`$values`** — 数组索引作为 key，数组值作为被存储的 var。

## 返回值

变量被成功添加时返回 TRUE，否则返回 FALSE。第二种语法返回包含添加失败的 key 的数组。

## 示例

**`apcu_add()` 示例**

```php


<?php
$bar = 'BAR';
apcu_add('foo', $bar);
var_dump(apcu_fetch('foo'));
echo "\n";
$bar = 'NEVER GETS SET';
apcu_add('foo', $bar);
var_dump(apcu_fetch('foo'));
echo "\n";
?>

   
```

以上示例会输出：

```text


string(3) "BAR"
string(3) "BAR"

   
```

## 参见

 `apcu_store()` `apcu_fetch()` `apcu_delete()`
