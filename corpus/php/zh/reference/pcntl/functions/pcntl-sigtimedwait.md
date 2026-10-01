---
id: "zh-php-function-function-pcntl-sigtimedwait"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_sigtimedwait"
title: "带超时机制的信号等待"
signature: "int|false pcntl_sigtimedwait(array $signals, array $info = [], int $seconds = 0, int $nanoseconds = 0)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-sigtimedwait.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 带超时机制的信号等待

## 说明

```php
int|false pcntl_sigtimedwait(array $signals, array $info = [], int $seconds = 0, int $nanoseconds = 0)
```

`pcntl_sigtimedwait()` 函数实际上与 `pcntl_sigwaitinfo()` 的行为一致，不同在于它多了两个增强参数 `$seconds` 和 `$nanoseconds`，这使得脚本等待的事件有了一个时间的上限。

## 参数

- **`$signals`** — 要等待的信号列表数组。
- **`$info`** — `$info` 设置为数组，包含信号的信息。参见 `pcntl_sigwaitinfo()`。
- **`$seconds`** — 超时秒数。
- **`$nanoseconds`** — 超时纳秒数。

## 返回值

成功时 `pcntl_sigtimedwait()` 返回信号编号， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$signal` 为空，则抛出 `ValueError`。 |
| 8.4.0 | 如果 `$signal` 的值不是 `int`，则抛出 `TypeError`。 |
| 8.4.0 | 如果 `$signal` 的值无效，则抛出 `ValueError`。 |
| 8.4.0 | 如果 `$seconds` 的值小于 `0`，则抛出 `ValueError`。 |
| 8.4.0 | 如果 `$nanoseconds` 的值小于 `0`，则抛出 `ValueError`。 |
| 8.4.0 | 如果 `$seconds` 和 `$nanoseconds` 的值都是 `0`，则抛出 `ValueError`。 |

## 参见

`pcntl_sigprocmask()` `pcntl_sigwaitinfo()`
