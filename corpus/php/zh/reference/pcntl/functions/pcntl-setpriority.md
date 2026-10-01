---
id: "zh-php-function-function-pcntl-setpriority"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_setpriority"
title: "修改任意进程的优先级"
signature: "bool pcntl_setpriority(int $priority, int|null $process_id = null, int $mode = PRIO_PROCESS)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-setpriority.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 修改任意进程的优先级

## 说明

```php
bool pcntl_setpriority(int $priority, int|null $process_id = null, int $mode = PRIO_PROCESS)
```

`pcntl_setpriority()` 设置进程号为 `$process_id` 的进程的优先级。

## 参数

- **`$priority`** — `$priority` 通常时 -20 至 20 这个范围内的值。默认优先级是 0,值越小代表 优先级越高。由于不同的系统类型以及内核版本下优先级可能不同，因此请参考系统的 setpriority（2） 手册以获取详细的规范。
- **`$process_id`** — 如果为 `null`，默认是当前进程的进程号。
- **`$mode`** — `PRIO_PGRP`（译注：获取进程组优先级）、`PRIO_USER`（译注：获取用户进程优先级）或 `PRIO_PROCESS（译注：默认值;获取进程优先级）`、`PRIO_DARWIN_BG` 或 `PRIO_DARWIN_THREAD` 之一。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$process_id` 可以为 null。 |

## 参见

`pcntl_getpriority()` `pcntl_setpriority()`
