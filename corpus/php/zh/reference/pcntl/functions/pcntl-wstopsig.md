---
id: "zh-php-function-function-pcntl-wstopsig"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_wstopsig"
title: "返回导致子进程停止的信号"
signature: "int|false pcntl_wstopsig(int $status)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-wstopsig.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回导致子进程停止的信号

## 说明

```php
int|false pcntl_wstopsig(int $status)
```

返回导致子进程停止的信号编号。这个函数仅在 `pcntl_wifstopped()` 返回 `true` 时有效。

## 参数

- **`$status`** — 参数 `$status` 是提供给成功调用 `pcntl_waitpid()` 时的状态参数。

## 返回值

返回信号编号。如果操作系统不支持该功能，将返回 `false`。

## 参见

`pcntl_waitpid()` `pcntl_wifstopped()`
