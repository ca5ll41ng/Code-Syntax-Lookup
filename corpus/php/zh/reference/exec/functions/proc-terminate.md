---
id: "zh-php-function-function-proc-terminate"
language: "php"
lang: "zh"
category: "function"
name: "proc_terminate"
title: "杀死由 proc_open 打开的进程"
signature: "bool proc_terminate(resource $process, int $signal = 15)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.proc-terminate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 杀死由 proc_open 打开的进程

## 说明

```php
bool proc_terminate(resource $process, int $signal = 15)
```

向 `$process`（由 `proc_open()` 创建）发送信号通知其终止。`proc_terminate()` 调用之后将会立即返回，而不会等待进程终止。

`proc_terminate()` 允许终止进程并继续其他的任务。可以使用 `proc_get_status()` 函数轮询进程（查看是否已经停止）。

## 参数

- **`$process`** — 将要关闭的由 `proc_open()` 打开的 `resource`。
- **`$signal`** — 可选参数，仅用于 POSIX 操作系统。可以使用 `kill(2)` 系统调用指定要发送到进程的信号。默认值为 `SIGTERM`。

## 返回值

返回已运行进程的终止状态。

## 参见

`proc_open()` `proc_close()` `proc_get_status()`
