---
id: "zh-php-function-function-pcntl-wifsignaled"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_wifsignaled"
title: "检查子进程状态码是否代表由于某个信号而中断"
signature: "bool pcntl_wifsignaled(int $status)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-wifsignaled.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查子进程状态码是否代表由于某个信号而中断

## 说明

```php
bool pcntl_wifsignaled(int $status)
```

检查子进程是否是由于某个未捕获的信号退出的。

## 参数

- **`$status`** — 参数 `$status` 是提供给成功调用 `pcntl_waitpid()` 时的状态参数。

## 返回值

如果子进程是由于某个未捕获的信号退出的返回 `true`，其他情况返回 `false` 。

## 参见

`pcntl_waitpid()` `pcntl_signal()`
