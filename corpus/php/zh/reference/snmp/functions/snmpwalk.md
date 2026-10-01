---
id: "zh-php-function-function-snmpwalk"
language: "php"
lang: "zh"
category: "function"
name: "snmpwalk"
title: "从代理获取所有 SNMP 对象"
signature: "array|false snmpwalk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/zh/function.snmpwalk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从代理获取所有 SNMP 对象

## 说明

```php
array|false snmpwalk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

`snmpwalk()` 函数用于从 `$hostname` 指定的 SNMP 代理读取所有值。

## 参数

- **`$hostname`** — SNMP 代理（服务器）。
- **`$community`** — The read community.
- **`$object_id`** — 如果为 `null`，则将 `$object_id` 作为 SNMP 对象树的根，并且该树下的所有对象都作为数组返回。 — 如果指定了 `$object_id`，则返回该 `$object_id` 下面的所有 SNMP 对象。
- **`$timeout`** — 第一次超时前的微秒数。
- **`$retries`** — 发生超时时重试的次数。

## 返回值

返回从 `$object_id` 开始的 SNMP 对象值数组，如 root 或错误时为 `false`。

## 示例

**`snmpwalk()` 示例**

```php


<?php
$a = snmpwalk("127.0.0.1", "public", "");

foreach ($a as $val) {
    echo "$val\n";
}

?>

   
```

上面的函数调用将从本地主机上运行的 SNMP 代理返回所有 SNMP 对象。 可以通过循环遍历这些值

## 参见

 `snmprealwalk()`
