---
id: "zh-php-function-function-dba-replace"
language: "php"
lang: "zh"
category: "function"
name: "dba_replace"
title: "替换或插入条目"
signature: "bool dba_replace(string|array $key, string $value, Dba\\Connection $dba)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 替换或插入条目

## 说明

```php
bool dba_replace(string|array $key, string $value, Dba\Connection $dba)
```

`dba_replace()` 替换或插入由 `$key` 和 `$value` 描述的条目到 `$dba` 指定的数据库中。

## 参数

- **`$key`** — 要替换的条目的键。
- **`$value`** — 要插入的值。
- **`$dba`** — 一个由 `dba_open()` 或 `dba_popen()` 返回的 `Dba\Connection` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$dba` 参数现在接受 `Dba\Connection` 实例， 之前接受有效的 `dba` `resource`。 |

## 参见

 `dba_exists()` `dba_delete()` `dba_fetch()` `dba_insert()`
