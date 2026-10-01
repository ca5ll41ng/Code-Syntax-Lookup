---
id: "zh-php-function-function-pcntl-getpriority"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_getpriority"
title: "获取任意进程的优先级"
signature: "int|false pcntl_getpriority(int|null $process_id = null, int $mode = PRIO_PROCESS)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-getpriority.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取任意进程的优先级

## 说明

```php
int|false pcntl_getpriority(int|null $process_id = null, int $mode = PRIO_PROCESS)
```

`pcntl_getpriority()` 获取进程号为 `$process_id` 的进程的优先级。由于不同的系统类型以及内核版本下 优先级可能不同，因此请参考系统的 getpriority（2）手册以获取详细的规范。

## 参数

- **`$process_id`** — 如果为 `null`，默认使用当前进程的进程号。
- **`$mode`** — `PRIO_PGRP`（译注：获取进程组优先级）、`PRIO_USER`（译注：获取用户进程优先级）、`PRIO_PROCESS（译注：默认值;获取进程优先级）`、`PRIO_DARWIN_BG` 或 `PRIO_DARWIN_THREAD` 之一。

## 返回值

`pcntl_getpriority()` 返回进程的优先级或在错误时返回 `false`。值越小代表优先级越高。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$process_id` 现在可以为 null。 |

## 参见

`pcntl_setpriority()`
