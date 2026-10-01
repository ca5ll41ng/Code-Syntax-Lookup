---
id: "zh-php-function-function-pcntl-sigprocmask"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_sigprocmask"
title: "设置或检索阻塞信号"
signature: "bool pcntl_sigprocmask(int $mode, array $signals, array $old_signals = null)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-sigprocmask.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置或检索阻塞信号

## 说明

```php
bool pcntl_sigprocmask(int $mode, array $signals, array $old_signals = null)
```

`pcntl_sigprocmask()` 函数用来增加，删除或设置阻塞信号，具体行为依赖于参数 `$mode`。

## 参数

- **`$mode`** — 设置 `pcntl_sigprocmask()` 函数的行为。可选值: `SIG_BLOCK`: 把信号加入到当前阻塞信号中。 `SIG_UNBLOCK`: 从当前阻塞信号中移出信号。 `SIG_SETMASK`: 用给定的信号列表替换当前阻塞信号列表。
- **`$signals`** — 信号列表。
- **`$old_signals`** — `$old_signals` 参数设置为数组，包含先前阻塞的信号列表。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$signal` 为空，则抛出 `ValueError`。 |
| 8.4.0 | 如果 `$signal` 的值不是 `int`，则抛出 `TypeError`。 |
| 8.4.0 | 如果 `$signal` 的值无效，则抛出 `ValueError`。 |
| 8.4.0 | 如果 `$mode` 的值不是 `SIG_BLOCK`、`SIG_UNBLOCK` 或 `SIG_SETMASK`，则抛出 `ValueError`。 |

## 示例

**`pcntl_sigprocmask()` 示例**

```php


<?php
pcntl_sigprocmask(SIG_BLOCK, array(SIGHUP));
$oldset = array();
pcntl_sigprocmask(SIG_UNBLOCK, array(SIGHUP), $oldset);
?>

    
```

## 参见

`pcntl_sigwaitinfo()` `pcntl_sigtimedwait()`
