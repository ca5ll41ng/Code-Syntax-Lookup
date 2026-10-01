---
id: "zh-php-function-function-pcntl-wifstopped"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_wifstopped"
title: "检查子进程当前是否已经停止"
signature: "bool pcntl_wifstopped(int $status)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-wifstopped.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查子进程当前是否已经停止

## 说明

```php
bool pcntl_wifstopped(int $status)
```

仅查子进程当前是否停止；此函数只有作用于使用了 `WUNTRACED` 作为 option 的 `pcntl_waitpid()` 函数调用产生的 status 时才有效。

## 参数

- **`$status`** — 参数 `$status` 是提供给成功调用 `pcntl_waitpid()` 时的状态参数。

## 返回值

如果子进程当前是停止的返回 `true`，其他情况返回 `false`。

## 参见

`pcntl_waitpid()`
