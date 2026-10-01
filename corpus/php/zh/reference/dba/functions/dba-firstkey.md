---
id: "zh-php-function-function-dba-firstkey"
language: "php"
lang: "zh"
category: "function"
name: "dba_firstkey"
title: "获取第一个键"
signature: "string|false dba_firstkey(Dba\\Connection $dba)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-firstkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取第一个键

## 说明

```php
string|false dba_firstkey(Dba\Connection $dba)
```

`dba_firstkey()` 返回数据库的第一个键并重置内部键指针。 这允许通过整个数据库进行线性搜索。

## 参数

- **`$dba`** — 一个由 `dba_open()` 或 `dba_popen()` 返回的 `Dba\Connection` 实例。

## 返回值

成功时返回键， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$dba` 参数现在接受 `Dba\Connection` 实例， 之前接受有效的 `dba` `resource`。 |

## 参见

 `dba_nextkey()` `dba_key_split()` Example 2 in the DBA examples
