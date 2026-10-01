---
id: "zh-php-function-function-snmprealwalk"
language: "php"
lang: "zh"
category: "function"
name: "snmprealwalk"
title: "返回指定的所有对象，包括它们各自的对象 ID"
signature: "array|false snmprealwalk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/zh/function.snmprealwalk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定的所有对象，包括它们各自的对象 ID

## 说明

```php
array|false snmprealwalk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

`snmprealwalk()` 函数用于遍历从 `$object_id` 开始的多个 SNMP 对象，不仅返回它们的值，还返回它们的对象 ID。

## 参数

- **`$hostname`** — SNMP 代理（服务器）的主机名。
- **`$community`** — The read community.
- **`$object_id`** — 在所需对象之前的 SNMP 对象 ID。
- **`$timeout`** — 第一次超时前的微秒数。
- **`$retries`** — 发生超时时重试的次数。

## 返回值

成功时返回 SNMP 对象 ID 及其值的关联数组，错误时返回 `false`。如果出现错误，将显示一条 E_WARNING 消息。

## 示例

**使用 `snmprealwalk()`**

```php


<?php
 print_r(snmprealwalk("localhost", "public", "IF-MIB::ifName"));
?>

   
```

以上将输出如下内容： Array ( [IF-MIB::ifName.1] => STRING: lo [IF-MIB::ifName.2] => STRING: eth0 [IF-MIB::ifName.3] => STRING: eth2 [IF-MIB::ifName.4] => STRING: sit0 [IF-MIB::ifName.5] => STRING: sixxs )

## 参见

 `snmpwalk()`
