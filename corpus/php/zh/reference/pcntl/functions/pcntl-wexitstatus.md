---
id: "zh-php-function-function-pcntl-wexitstatus"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_wexitstatus"
title: "返回一个中断的子进程的返回代码"
signature: "int|false pcntl_wexitstatus(int $status)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-wexitstatus.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个中断的子进程的返回代码

## 说明

```php
int|false pcntl_wexitstatus(int $status)
```

返回一个中断的子进程的返回代码。这个函数仅在函数 `pcntl_wifexited()` 返回 `true` 时有效。

## 参数

- **`$status`** — 参数 `$status` 是提供给成功调用 `pcntl_waitpid()` 时的状态参数。

## 返回值

返回子进程返回代码。如果操作系统不支持该功能，将返回 `false`。

## 参见

`pcntl_waitpid()` `pcntl_wifexited()`
