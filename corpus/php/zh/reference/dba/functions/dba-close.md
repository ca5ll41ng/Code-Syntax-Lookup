---
id: "zh-php-function-function-dba-close"
language: "php"
lang: "zh"
category: "function"
name: "dba_close"
title: "关闭 DBA 数据库"
signature: "void dba_close(Dba\\Connection $dba)"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 DBA 数据库

## 说明

```php
void dba_close(Dba\Connection $dba)
```

`dba_close()` 关闭已建立的数据库并释放指定数据库句柄的所有资源。

## 参数

- **`$dba`** — 一个由 `dba_open()` 或 `dba_popen()` 返回的 `Dba\Connection` 实例。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `$dba` 参数现在接受 `Dba\Connection` 实例， 之前接受有效的 `dba` `resource`。 |

## 参见

 `dba_open()` `dba_popen()`
