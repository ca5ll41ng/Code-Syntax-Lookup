---
id: "zh-php-function-function-dba-optimize"
language: "php"
lang: "zh"
category: "function"
name: "dba_optimize"
title: "优化数据库"
signature: "bool dba_optimize(Dba\\Connection $dba)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-optimize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 优化数据库

## 说明

```php
bool dba_optimize(Dba\Connection $dba)
```

`dba_optimize()` 优化底层数据库。

## 参数

- **`$dba`** — 一个由 `dba_open()` 或 `dba_popen()` 返回的 `Dba\Connection` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$dba` 参数现在接受 `Dba\Connection` 实例， 之前接受有效的 `dba` `resource`。 |

## 参见

 `dba_sync()`
