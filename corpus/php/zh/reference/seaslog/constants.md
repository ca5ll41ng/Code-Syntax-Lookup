---
id: "zh-php-guide-seaslog-constants"
language: "php"
lang: "zh"
category: "guide"
name: "seaslog.constants"
title: "预定义常量"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`SEASLOG_VERSION` (`string`)**
- **`SEASLOG_AUTHOR` (`string`)**
- **`SEASLOG_ALL` (`string`)** — "ALL"
- **`SEASLOG_DEBUG` (`string`)** — "DEBUG" - 详细的调试信息。细粒度的信息事件。
- **`SEASLOG_INFO` (`string`)** — "INFO" - 重要事件、强调应用程序的运行过程。
- **`SEASLOG_NOTICE` (`string`)** — "NOTICE" - 一般重要性事件、执行过程中较INFO级别更为重要的信息。
- **`SEASLOG_WARNING` (`string`)** — "WARNING" - 出现了非错误性的异常信息、潜在异常信息、需要关注并且需要修复。
- **`SEASLOG_ERROR` (`string`)** — "ERROR" - 运行时出现的错误，不需要立刻采取行动，但必须记录下来以备检测。
- **`SEASLOG_CRITICAL` (`string`)** — "CRITICAL" - 紧急情况、需要立刻进行修复、程序组件已经不可用。
- **`SEASLOG_ALERT` (`string`)** — "ALERT" - 必级立即采取行动的紧急事件、需要立即通知相关人员紧急修复。
- **`SEASLOG_EMERGENCY` (`string`)** — "EMERGENCY" - 系统不可用。
- **`SEASLOG_DETAIL_ORDER_ASC` (`int`)** — 1
- **`SEASLOG_DETAIL_ORDER_DESC` (`int`)** — 2
- **`SEASLOG_APPENDER_FILE` (`int`)** — 1
- **`SEASLOG_APPENDER_TCP` (`int`)** — 2
- **`SEASLOG_APPENDER_UDP` (`int`)** — 3
- **`SEASLOG_CLOSE_LOGGER_STREAM_MOD_ALL` (`int`)** — 1
- **`SEASLOG_CLOSE_LOGGER_STREAM_MOD_ASSIGN` (`int`)** — 2
- **`SEASLOG_REQUEST_VARIABLE_DOMAIN_PORT` (`int`)** — 1
- **`SEASLOG_REQUEST_VARIABLE_REQUEST_URI` (`int`)** — 2
- **`SEASLOG_REQUEST_VARIABLE_REQUEST_METHOD` (`int`)** — 3
- **`SEASLOG_REQUEST_VARIABLE_CLIENT_IP` (`int`)** — 4
