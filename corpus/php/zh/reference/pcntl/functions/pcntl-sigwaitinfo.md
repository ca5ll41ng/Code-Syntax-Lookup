---
id: "zh-php-function-function-pcntl-sigwaitinfo"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_sigwaitinfo"
title: "等待信号"
signature: "int|false pcntl_sigwaitinfo(array $signals, array $info = [])"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-sigwaitinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 等待信号

## 说明

```php
int|false pcntl_sigwaitinfo(array $signals, array $info = [])
```

`pcntl_sigwaitinfo()` 函数暂停调用脚本的执行直到接收到 `$signals` 参数中列出的某个信号。只要其中的一个信号已经在等待状态（比如：通过 `pcntl_sigprocmask()` 函数阻塞），`pcntl_sigwaitinfo()` 就回立刻返回。

## 参数

- **`$signals`** — 要等待的信号数组。
- **`$info`** — `$info` 参数设置为数组，包含信号信息。 — 以下元素会为所有信号设置： signo：信号编号 errno：错误编号 code：信号代码 — 下面元素可能会为 `SIGCHLD` 信号设置： status：退出的值或信号 utime：用户消耗的时间 stime：系统（内核）消耗的时间 pid：发送进程ID uid：发送进程的实际用户ID — 信号 `SIGILL`, `SIGFPE`, `SIGSEGV` 和 `SIGBUS` 可能会被设置的元素: addr：发生故障的内存位置 — 可能会为 `SIGPOLL` 信号设置的元素： band：Band event fd：文件描述符

## 返回值

成功时返回信号编号， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$signal` 为空，则抛出 `ValueError`。 |
| 8.4.0 | 如果 `$signal` 的值不是 `int`，则抛出 `TypeError`。 |
| 8.4.0 | 如果 `$signal` 的值无效，则抛出 `ValueError`。 |

## 示例

**`pcntl_sigwaitinfo()` 示例**

```php


<?php
echo "Blocking SIGHUP signal\n";
pcntl_sigprocmask(SIG_BLOCK, array(SIGHUP));

echo "Sending SIGHUP to self\n";
posix_kill(posix_getpid(), SIGHUP);

echo "Waiting for signals\n";
$info = array();
pcntl_sigwaitinfo(array(SIGHUP), $info);
?>

    
```

## 参见

`pcntl_sigprocmask()` `pcntl_sigtimedwait()`
