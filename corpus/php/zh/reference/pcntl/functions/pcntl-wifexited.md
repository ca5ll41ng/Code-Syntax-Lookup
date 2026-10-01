---
id: "zh-php-function-function-pcntl-wifexited"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_wifexited"
title: "检查状态代码是否代表一个正常的退出"
signature: "bool pcntl_wifexited(int $status)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-wifexited.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查状态代码是否代表一个正常的退出

## 说明

```php
bool pcntl_wifexited(int $status)
```

检查子进程状态代码是否代表正常退出。

## 参数

- **`$status`** — 参数 `$status` 是提供给成功调用 `pcntl_waitpid()` 时的状态参数。

## 返回值

当子进程状态代码代表正常退出时返回 `true`，其他情况返回 `false`。

## 参见

`pcntl_waitpid()` `pcntl_wexitstatus()`
