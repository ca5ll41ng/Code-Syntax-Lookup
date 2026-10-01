---
id: "zh-php-function-function-snmpget"
language: "php"
lang: "zh"
category: "function"
name: "snmpget"
title: "获取 SNMP 对象"
signature: "mixed snmpget(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/zh/function.snmpget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 SNMP 对象

## 说明

```php
mixed snmpget(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

`snmpget()` 函数用于读取由 `$object_id` 指定的 SNMP 对象的值。

## 参数

- **`$hostname`** — SNMP 代理。
- **`$community`** — The read community.
- **`$object_id`** — SNMP 对象。
- **`$timeout`** — 第一次超时前的微秒数。
- **`$retries`** — 发生超时时重试的次数。

## 返回值

成功时返回 SNMP 对象值，错误时为 `false`。

## 示例

**使用 `snmpget()`**

```php


<?php
$syscontact = snmpget("127.0.0.1", "public", "system.SysContact.0");
?>

   
```

## 参见

 `snmpset()`
