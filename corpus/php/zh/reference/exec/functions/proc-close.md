---
id: "zh-php-function-function-proc-close"
language: "php"
lang: "zh"
category: "function"
name: "proc_close"
title: "关闭由 `proc_open()` 打开的进程并且返回进程退出码"
signature: "int proc_close(resource $process)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.proc-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭由 `proc_open()` 打开的进程并且返回进程退出码

## 说明

```php
int proc_close(resource $process)
```

`proc_close()` 同 `pclose()` 函数类似，只是 `proc_close()` 只能用来关闭由 `proc_open()` 函数打开的进程。`proc_close()` 函数会等待进程终止，并返回它的退出代码。调用此函数时，为避免死锁，该进程打开的管道将关闭——在管道处于打开状态时，子进程将不能退出。

## 参数

- **`$process`** — 要关闭的由 `proc_open()` 打开的 `resource` 。

## 返回值

返回进程的终止状态码。 如果发生错误，将返回 `-1`。

> 如果 PHP 是通过 --enable-sigchild 编译的，此函数将没有返回值。
