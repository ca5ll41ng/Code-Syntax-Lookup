---
id: "zh-php-function-function-snmpwalkoid"
language: "php"
lang: "zh"
category: "function"
name: "snmpwalkoid"
title: "查询有关网络实体的信息树"
signature: "array|false snmpwalkoid(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/zh/function.snmpwalkoid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查询有关网络实体的信息树

## 说明

```php
array|false snmpwalkoid(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

`snmpwalkoid()` 函数用于从 `$hostname` 指定的 SNMP 代理读取所有对象 ID 及其各自的值。

`snmpwalkoid()` 和 `snmpwalk()` 的存在是有历史原因的。提供这两个函数是为了向后兼容。请改用 `snmprealwalk()`。

## 参数

- **`$hostname`** — SNMP 代理。
- **`$community`** — The read community.
- **`$object_id`** — 如果为 `null`，则将 `$object_id` 作为 SNMP 对象树的根，并且该树下的所有对象都作为数组返回。 — 如果指定了 `$object_id`，则返回该 `$object_id` 下面的所有 SNMP 对象。
- **`$timeout`** — 第一次超时前的微秒数。
- **`$retries`** — 发生超时时重试的次数。

## 返回值

返回关联数组，其中包含对象 ID 及其各自的对象值，从 `$object_id` 开始为 root 或错误时为 `false`。

## 示例

**`snmpwalkoid()` 示例**

```php


<?php
$a = snmpwalkoid("127.0.0.1", "public", "");
for (reset($a); $i = key($a); next($a)) {
    echo "$i: $a[$i]<br />\n";
}
?>

   
```

上面的函数调用将从本地主机上运行的 SNMP 代理返回所有 SNMP 对象。可以通过循环遍历这些值

## 参见

 `snmpwalk()`
