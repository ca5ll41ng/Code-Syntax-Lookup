---
id: "zh-php-function-function-pcntl-alarm"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_alarm"
title: "为进程设置 alarm 闹钟信号"
signature: "int pcntl_alarm(int $seconds)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-alarm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为进程设置 alarm 闹钟信号

## 说明

```php
int pcntl_alarm(int $seconds)
```

创建计时器，在指定的秒数后向进程发送 `SIGALRM` 信号。每次对 `pcntl_alarm()` 的调用都会取消之前设置的 alarm 信号。

## 参数

- **`$seconds`** — 等待的秒数。如果 `$seconds` 设置为 0,将不会创建 alarm 信号。

## 返回值

返回上次 alarm 调度（离 alarm 信号发送）剩余的秒数，或者之前没有 alarm 调度（译注：或者之前调度已完成） 时返回 `0`。
