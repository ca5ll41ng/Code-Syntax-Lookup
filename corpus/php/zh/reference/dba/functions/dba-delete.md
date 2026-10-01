---
id: "zh-php-function-function-dba-delete"
language: "php"
lang: "zh"
category: "function"
name: "dba_delete"
title: "删除由键指定的 DBA 条目"
signature: "bool dba_delete(string|array $key, Dba\\Connection $dba)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除由键指定的 DBA 条目

## 说明

```php
bool dba_delete(string|array $key, Dba\Connection $dba)
```

`dba_delete()` 从数据库中删除指定的条目。

## 参数

- **`$key`** — 要删除的条目的键。
- **`$dba`** — 一个由 `dba_open()` 或 `dba_popen()` 返回的 `Dba\Connection` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$dba` 参数现在接受 `Dba\Connection` 实例， 之前接受有效的 `dba` `resource`。 |

## 参见

 `dba_exists()` `dba_fetch()` `dba_insert()` `dba_replace()`
