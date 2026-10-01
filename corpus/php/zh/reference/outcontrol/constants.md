---
id: "zh-php-guide-outcontrol-constants"
language: "php"
lang: "zh"
category: "guide"
name: "outcontrol.constants"
title: "预定义常量"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/outcontrol.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量作为 PHP 核心的一部分总是可用的。

- **`PHP_OUTPUT_HANDLER_START` (`int`)** — 表示输出缓冲已经开始。
- **`PHP_OUTPUT_HANDLER_WRITE` (`int`)** — 表示输出缓冲区正在刷新，并且有数据要输出。
- **`PHP_OUTPUT_HANDLER_FLUSH` (`int`)** — 表示缓冲区已清空。
- **`PHP_OUTPUT_HANDLER_CLEAN` (`int`)** — 表示输出缓冲已清空。
- **`PHP_OUTPUT_HANDLER_FINAL` (`int`)** — 表示这是最后一次输出缓冲操作。
- **`PHP_OUTPUT_HANDLER_CONT` (`int`)** — 表示缓冲区已清空，但输出缓冲将继续。 — 这是 `PHP_OUTPUT_HANDLER_WRITE` 的别名。
- **`PHP_OUTPUT_HANDLER_END` (`int`)** — 表示输出缓冲已结束。 — 这是 `PHP_OUTPUT_HANDLER_FINAL` 的别名。

- **`PHP_OUTPUT_HANDLER_CLEANABLE` (`int`)** — 控制 `ob_start()` 创建的输出缓冲区是否可以由 `ob_clean()` 清除。这个 flag 不能控制 `ob_end_clean()` 或 `ob_get_clean()` 的行为。
- **`PHP_OUTPUT_HANDLER_FLUSHABLE` (`int`)** — 控制 `ob_start()` 创建的输出缓冲区是否可以由 `ob_flush()` 刷新。这个 flag 不能控制 `ob_end_flush()` 或 `ob_get_flush()` 的行为。
- **`PHP_OUTPUT_HANDLER_REMOVABLE` (`int`)** — 控制 `ob_start()` 创建的输出缓冲区是否可以在脚本结束前或者调用 `ob_end_clean()`、`ob_end_flush()`、`ob_get_clean()` 或 `ob_get_flush()` 移除。
- **`PHP_OUTPUT_HANDLER_STDFLAGS` (`int`)** — 输出缓冲区 flag 的默认设置；当前等同于 `PHP_OUTPUT_HANDLER_CLEANABLE` | `PHP_OUTPUT_HANDLER_FLUSHABLE` | `PHP_OUTPUT_HANDLER_REMOVABLE`.

- **`PHP_OUTPUT_HANDLER_STARTED` (`int`)** — 表示输出处理程序已调用。
- **`PHP_OUTPUT_HANDLER_DISABLED` (`int`)** — 表示输出处理程序已禁用。当输出处理程序返回 `false` 或者处理缓冲区失败时设置此 flag。 在 PHP 8.4.0 之前，此 flag 可以在启动输出缓冲区时设置。
- **`PHP_OUTPUT_HANDLER_PROCESSED` (`int`)** — 表示输出处理程序已经成功处理了缓冲区。 自 PHP 8.4.0 起可用。
