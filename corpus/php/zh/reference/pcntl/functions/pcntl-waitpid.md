---
id: "zh-php-function-function-pcntl-waitpid"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_waitpid"
title: "等待或返回 fork 的子进程状态"
signature: "int pcntl_waitpid(int $process_id, int $status, int $flags = 0, array $resource_usage = [])"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-waitpid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 等待或返回 fork 的子进程状态

## 说明

```php
int pcntl_waitpid(int $process_id, int $status, int $flags = 0, array $resource_usage = [])
```

挂起当前进程的执行直到参数 `$process_id` 指定的进程号的进程退出， 或接收到一个信号要求中断当前进程或调用一个信号处理函数。

如果 `$process_id` 指定的子进程在此函数调用时已经退出（俗称僵尸进程），此函数 将立刻返回。关于 waitpid 更详细的规范请参见系统的 waitpid（2）手册。

## 参数

- **`$process_id`** — 参数 `$process_id` 的值可以是以下之一： | `< -1` | 等待任意进程组 ID 等于参数 `$process_id` 给定值的绝对值的进程。 | | --- | --- | | `-1` | 等待任意子进程；与 `pcntl_wait()` 函数行为一致。 | | `0` | 等待任意与调用进程组 ID 相同的子进程。 | | `> 0` | 等待进程号等于参数 `$process_id` 值的子进程。 |
  > 指定 `-1` 作为 `$process_id` 的值等同于 `pcntl_wait()` 提供（负的 `$flags`）。


- **`$status`** — `pcntl_waitpid()` 将会存储状态信息到 `$status` 参数上，这个通过 `$status` 参数返回的状态信息可以用以下函数 `pcntl_wifexited()`、 `pcntl_wifstopped()`、 `pcntl_wifsignaled()`、 `pcntl_wexitstatus()`、 `pcntl_wtermsig()` 以及 `pcntl_wstopsig()` 获取其具体的值。
- **`$flags`** — `$flags` 的值可以是以下两个常量中 0 个或多个 `OR` 运算的结果： | `WNOHANG` | 如果没有子进程退出立刻返回。 | | --- | --- | | `WUNTRACED` | 子进程已经退出并且其状态未报告时返回。 |

## 返回值

`pcntl_waitpid()` 返回退出的子进程进程号，发生错误时返回 -1，如果使用 `WNOHANG` 并且没有可用子进程时返回 0。

## 参见

`pcntl_fork()` `pcntl_signal()` `pcntl_wifexited()` `pcntl_wifstopped()` `pcntl_wifsignaled()` `pcntl_wexitstatus()` `pcntl_wtermsig()` `pcntl_wstopsig()`
