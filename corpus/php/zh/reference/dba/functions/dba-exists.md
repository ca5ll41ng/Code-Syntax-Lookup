---
id: "zh-php-function-function-dba-exists"
language: "php"
lang: "zh"
category: "function"
name: "dba_exists"
title: "检查键是否存在"
signature: "bool dba_exists(string|array $key, Dba\\Connection $dba)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查键是否存在

## 说明

```php
bool dba_exists(string|array $key, Dba\Connection $dba)
```

`dba_exists()` 检查数据库中是否存在指定的 `$key`。

## 参数

- **`$key`** — 要检查的键。
- **`$dba`** — 一个由 `dba_open()` 或 `dba_popen()` 返回的 `Dba\Connection` 实例。

## 返回值

如果键存在则返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$dba` 参数现在接受 `Dba\Connection` 实例， 之前接受有效的 `dba` `resource`。 |

## 参见

 `dba_delete()` `dba_fetch()` `dba_insert()` `dba_replace()`
