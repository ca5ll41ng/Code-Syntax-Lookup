---
id: "zh-php-function-function-pcntl-wait"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_wait"
title: "等待或返回 fork 的子进程状态"
signature: "int pcntl_wait(int $status, int $flags = 0, array $resource_usage = [])"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-wait.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 等待或返回 fork 的子进程状态

## 说明

```php
int pcntl_wait(int $status, int $flags = 0, array $resource_usage = [])
```

wait 函数挂起当前进程的执行直到一个子进程退出或接收到一个信号要求中断当前进程或调用一个信号处理函数。如果一个子进程在调用此函数时已经退出（俗称僵尸进程），此函数立刻返回。子进程使用的所有系统资源将被释放。关于 wait 在您系统上工作的详细规范请查看您系统的 wait（2）手册。

> 这个函数等同于以 `-1` 作为参数 `$process_id` 的值并且没有 `$flags` 参数来调用 `pcntl_waitpid()` 函数。

## 参数

- **`$status`** — `pcntl_wait()` 将会存储状态信息到 `$status` 参数上，这个通过 `$status` 参数返回的状态信息可以用以下函数 `pcntl_wifexited()`、 `pcntl_wifstopped()`、 `pcntl_wifsignaled()`、 `pcntl_wexitstatus()`、 `pcntl_wtermsig()` 以及 `pcntl_wstopsig()` 获取其具体的值。
- **`$flags`** — 如果操作系统（多数 BSD 类系统）允许使用 wait3，可以提供可选的 `$flags` 参数。如果这个参数没有提供，wait 将会被用作系统调用。如果 wait3 不可用，提供参数 `$flags` 不会有任何效果。`$flags` 的值可以是以下两个常量中 0 个或多个 `OR` 运算的结果： | `WNOHANG` | 如果没有子进程退出立刻返回。 | | --- | --- | | `WUNTRACED` | 子进程已经退出并且其状态未报告时返回。 |

## 返回值

`pcntl_wait()` 返回退出的子进程进程号，发生错误时返回 -1，如果提供了 WNOHANG 作为 option（wait3 可用的系统）并且没有可用子进程时返回 0。

## 参见

`pcntl_fork()` `pcntl_signal()` `pcntl_wifexited()` `pcntl_wifstopped()` `pcntl_wifsignaled()` `pcntl_wexitstatus()` `pcntl_wtermsig()` `pcntl_wstopsig()` `pcntl_waitpid()`
