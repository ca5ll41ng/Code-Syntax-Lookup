---
id: "zh-php-function-function-pcntl-wtermsig"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_wtermsig"
title: "返回导致子进程中断的信号"
signature: "int|false pcntl_wtermsig(int $status)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-wtermsig.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回导致子进程中断的信号

## 说明

```php
int|false pcntl_wtermsig(int $status)
```

返回导致子进程中断的信号编号。这个函数仅在 `pcntl_wifsignaled()` 返回 `true` 时有效。

## 参数

- **`$status`** — 参数 `$status` 是提供给成功调用 `pcntl_waitpid()` 时的状态参数。

## 返回值

返回信号编号。如果操作系统不支持该功能，将返回 `false`。

## 参见

`pcntl_waitpid()` `pcntl_signal()` `pcntl_wifsignaled()`
