---
id: "zh-php-function-function-proc-get-status"
language: "php"
lang: "zh"
category: "function"
name: "proc_get_status"
title: "获取由 `proc_open()` 函数打开的进程的信息"
signature: "array proc_get_status(resource $process)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.proc-get-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取由 `proc_open()` 函数打开的进程的信息

## 说明

```php
array proc_get_status(resource $process)
```

`proc_get_status()` 函数可以获取由 `proc_open()` 函数打开的进程的信息。

## 参数

- **`$process`** — 要检查的由 `proc_open()` 打开的进程 `resource`。

## 返回值

收集了进程信息的 `array`。返回的数组包含下列元素：

| 元素 | 类型 | 描述 |
| --- | --- | --- |
| command | `string` | 传入 `proc_open()` 函数的命令行字符串。 |
| pid | `int` | 进程 ID |
| running | `bool` | `true` 表示进程还在运行中， `false` 表示进程已经终止 |
| signaled | `bool` | `true` 表示子进程被未捕获的信号所终止。 在 Windows 平台永远为 `false`。 |
| stopped | `bool` | `true` 表示子进程被信号停止。 在 Windows 平台永远为 `false`。 |
| exitcode | `int` | 进程的退出码（仅在 `running` 为 `false` 时有意义）。PHP 8.3.0 之前，此函数仅第一次调用返回实际的值，后续调用均返回 `-1`。 |
| cached | `bool` | 自 PHP 8.3.0 起，当 exit 代码已缓存时为 `true`。缓存是必要的，确保 exit 代码不会在后续调用进程 API 时丢失。 |
| termsig | `int` | 导致子进程终止执行的信号值 （仅在 `signaled` 为 `true` 时有意义）。 |
| stopsig | `int` | 导致子进程停止执行的信号值 （仅在 `stopped` 为 `true` 时有意义）。 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 返回的数组中添加了`"cached"` 条目。PHP 8.3.0 之前，只有第一次调用才会返回真正的 exit 代码。`"cached"` 条目表示已缓存 exit 代码。 |

## 参见

`proc_open()`
