---
id: "zh-php-function-function-pcntl-signal"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_signal"
title: "安装信号处理程序"
signature: "bool pcntl_signal(int $signal, callable|int $handler, bool $restart_syscalls = true)"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-signal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装信号处理程序

## 说明

```php
bool pcntl_signal(int $signal, callable|int $handler, bool $restart_syscalls = true)
```

`pcntl_signal()` 函数为 `$signal` 指定的信号安装新的信号处理程序或替换当前信号处理程序。

## 参数

- **`$signal`** — 信号编号。
- **`$handler`** — 信号处理程序。要么是 `callable`，将调用它来处理信号，要么是全局常量 `SIG_IGN` 或 `SIG_DFL`，将分别用于忽略信号或恢复默认信号处理程序。 — 如果指定为 `callable`，必须实现以下签名： — `void``{handler}()` `int``$signo` `mixed``$siginfo` - **`$signal`** — 正在处理的信号。 - **`$siginfo`** — 如果操作系统支持 siginfo_t 结构体，这将是依赖于信号的信号信息数组。
  > 请注意，当处理程序设置为对象方法时，该对象的引用计数会增加，这会使其持续存在，直到将处理程序更改为其他内容或脚本结束为止。


- **`$restart_syscalls`** — 指定当信号到达时系统调用重启是否可用。（译注：经查资料，此参数意为系统调用被信号打断时，系统调用是否从 开始处重新开始，但根据 http://bugs.php.net/bug.php?id=52121，此参数存在bug无效。）

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 从 PHP 7.1.0 开始，处理程序 callback 指定为第二个参数，其中包含特定信号的 siginfo。仅当操作系统具有 siginfo_t 结构体时才提供此数据。如果操作系统未实现 siginfo_t，则提供 NULL。 |

## 示例

**`pcntl_signal()` 示例**

```php


<?php
pcntl_async_signals(true);

// 信号处理函数
function sig_handler($signo)
{

     switch ($signo) {
         case SIGTERM:
             // 处理终止任务
             exit;
             break;
         case SIGHUP:
             // 处理重启任务
             break;
         case SIGUSR1:
             echo "Caught SIGUSR1...\n";
             break;
         default:
             // 处理所有其它信号
     }

}

echo "Installing signal handler...\n";

// 安装信号处理程序
pcntl_signal(SIGTERM, "sig_handler");
pcntl_signal(SIGHUP,  "sig_handler");
pcntl_signal(SIGUSR1, "sig_handler");

// 或使用对象
// pcntl_signal(SIGUSR1, array($obj, "do_something");

echo "Generating signal SIGUSR1 to self...\n";

// 向当前进程 ID 发送 SIGUSR1 信号
// posix_* 函数需要 posix 扩展
posix_kill(posix_getpid(), SIGUSR1);

echo "Done\n";

?>

    
```

## 注释

 {{{ 

`pcntl_signal()` 不堆叠信号处理程序，而是替换。

### 调度方式

调度信号处理程序的方法有多种： 启用 `pcntl_async_signals()` 异步调度。这是推荐方法 设置 tick 频率 使用 `pcntl_signal_dispatch()` 手动调度

当信号以异步方式或使用基于 tick 的执行调度时，阻塞函数（如 `sleep()`）可能会被中断。

 }}} 

## 参见

[Signal (IPC)](https://en.wikipedia.org/wiki/Signal_(IPC)) on Wikipedia `pcntl_async_signals()` `pcntl_fork()` `pcntl_signal_dispatch()` `pcntl_waitpid()`
