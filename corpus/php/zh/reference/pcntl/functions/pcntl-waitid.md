---
id: "zh-php-function-function-pcntl-waitid"
language: "php"
lang: "zh"
category: "function"
name: "pcntl_waitid"
title: "等待子进程改变状态"
signature: "bool pcntl_waitid(int $idtype = P_ALL, int|null $id = null, array $info = [], int $flags = WEXITED, array $resource_usage = [])"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/function.pcntl-waitid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 等待子进程改变状态

## 说明

```php
bool pcntl_waitid(int $idtype = P_ALL, int|null $id = null, array $info = [], int $flags = WEXITED, array $resource_usage = [])
```

获取与终止、停止和/或继续事件有关的状态信息，这些事件发生在调用者的一个子进程中。

除非传递了 `WNOHANG` 标志，否则调用进程将被阻塞，直到发生错误， 或者满足以下所有条件的状态信息变得可用：

- 由 `$idtype` 和 `$id` 参数指定的一组子进程中的一个子进程的状态信息。
- 状态信息的状态更改与在 `$flags` 参数中设置的状态更改标志之一匹配。

如果在调用 `pcntl_waitid()` 之前有匹配的状态信息可用，则返回将是立即的。 如果有两个或两个以上的子进程的匹配状态信息可用，则其状态报告的顺序是未指定的。

> 本文档涵盖了 POSIX 规范中 `waitid` 函数的说明，以及在 Linux、NetBSD 和 FreeBSD 上的实现中的一些额外参数。 请查看您系统的 `waitid(2)` man 手册，以获取有关 `waitid` 在您系统上的工作方式的具体细节。

## 参数

- **`$idtype`** — `$idtype` 和 `$id` 参数用于指定要等待的子进程。
  | 如果 `$idtype` 是 `P_ALL` | 等待任何子进程，`$id` 被忽略。 |
  | --- | --- |
  | 如果 `$idtype` 是 `P_PID` | 等待进程 ID 等于 `$id` 的子进程。 |
  | 如果 `$idtype` 是 `P_PGID` | 等待进程组 ID 等于 `$id` 的任何子进程。 |


  | 如果 `$idtype` 是 `P_PIDFD`（自 Linux 5.4 起） | 等待由 `$id` 中指定的 PID 文件描述符引用的子进程。 （有关 PID 文件描述符的详细信息，请参见 Linux `pidfd_open(2)` man 手册） |
  | --- | --- |


  | 如果 `$idtype` 是 `P_UID` | 等待有效用户 ID 等于 `$id` 的进程。 |
  | --- | --- |
  | 如果 `$idtype` 是 `P_GID` | 等待有效组 ID 等于 `$id` 的进程。 |
  | 如果 `$idtype` 是 `P_SID` | 等待会话 ID 等于 `$id` 的进程。 如果子进程启动了自己的会话，其会话 ID 将与其进程 ID 相同。 否则，子进程的会话 ID 将与调用者的会话 ID 匹配。 |


  | 如果 `$idtype` 是 `P_JAILID` | 等待在其 jail 标识符等于 `$id` 的 jail 中的进程。 |
  | --- | --- |


- **`$info`** — `$info` 参数设置为一个包含有关信号的信息的数组。 — `$info` 数组可能包含以下键： `signo`：信号量 `errno`：系统错误号 `code`：信号代码 `status`：退出值或信号 `pid`：发送进程 ID `uid`：发送进程的真实用户 ID `utime`：用户消耗的时间 `stime`：系统消耗的时间
- **`$flags`** — `$flags` 的值是零个或多个以下常量的值，这些常量通过 OR 运算在一起： | `WCONTINUED` | 为任何继续自作业控制停止的子进程返回状态。 控制停止后，要么没有报告过其状态，要么只有通过设置了 `WNOWAIT` 标志的 `pcntl_waitid()` 调用报告过其状态。 | | --- | --- | | `WEXITED` | 返回已退出的子进程的状态。 | | `WNOHANG` | 如果没有可用的状态，则不挂起；立即返回。 | | `WNOWAIT` | 保持状态返回在 `$info` 中的进程处于可等待状态。 这不会影响进程的状态；在此调用完成后，可以再次等待该进程。 | | `WSTOPPED` | 返回已停止的子进程的状态。 控制停止后，要么没有报告过其状态，要么只有通过设置了 `WNOWAIT` 标志的 `pcntl_waitid()` 调用报告过其状态。 |
- **`$resource_usage`** — `$resource_usage` 参数设置为数组，包含子进程的资源使用统计信息。 此功能在以下两种情况下受支持：一是系统提供 wait6 系统调用（例如 FreeBSD），二是在 Linux 系统上通过原始的 waitid 系统调用实现。

## 返回值

`pcntl_waitid()` 如果指定了 `WNOHANG` 并且状态对于由 `$idtype` 和 `$id` 指定的任何进程都不可用，则返回 `true`。

如果由于其一个子进程的状态更改而返回 `true`，则 `pcntl_waitid()` 返回 `true`。

否则，返回 `false`，并且可以使用 `pcntl_get_last_error()` 来获取 `errno` 错误号。

> 一旦获得了一个 `errno` 错误号，可以使用 `pcntl_strerror()` 来获取与之关联的文本消息。

## 错误／异常

| `ECHILD` | 调用进程没有未等待的子进程。 |
| --- | --- |
| `EINTR` | `pcntl_waitid()` 被一个信号中断。 |
| `EINVAL` | 为 `$flags` 指定了一个无效值， 或者 `$idtype` 和 `$id` 指定了一组无效的进程。 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 增加了 `$resource_usage`。 |

## 参见

`pcntl_waitpid()` `pcntl_wait()` `pcntl_fork()` `pcntl_signal()` `pcntl_wifexited()` `pcntl_wifstopped()` `pcntl_wifsignaled()` `pcntl_wexitstatus()` `pcntl_wtermsig()` `pcntl_wstopsig()`
