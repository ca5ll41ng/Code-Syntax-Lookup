---
id: "zh-php-guide-pcntl-constants"
language: "php"
lang: "zh"
category: "guide"
name: "pcntl.constants"
title: "预定义常量"
module: "pcntl"
source_url: "https://www.php.net/manual/zh/pcntl.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下面列出的信号列表用于支持进程控制函数。关于这些信号默认行为的更详细信息请查看您系统的 signal（7）man 手册

- **`WNOHANG` (`int`)**
- **`WUNTRACED` (`int`)**
- **`WCONTINUED` (`int`)**
- **`WEXITED` (`int`)**
- **`WSTOPPED` (`int`)**
- **`WNOWAIT` (`int`)**

- **`SIG_IGN` (`int`)**
- **`SIG_DFL` (`int`)**
- **`SIG_ERR` (`int`)**
- **`SIGHUP` (`int`)**
- **`SIGINFO` (`int`)**
- **`SIGINT` (`int`)**
- **`SIGQUIT` (`int`)**
- **`SIGILL` (`int`)**
- **`SIGTRAP` (`int`)**
- **`SIGABRT` (`int`)**
- **`SIGIOT` (`int`)**
- **`SIGBUS` (`int`)**
- **`SIGFPE` (`int`)**
- **`SIGKILL` (`int`)**
- **`SIGUSR1` (`int`)**
- **`SIGSEGV` (`int`)**
- **`SIGUSR2` (`int`)**
- **`SIGPIPE` (`int`)**
- **`SIGALRM` (`int`)**
- **`SIGTERM` (`int`)**
- **`SIGSTKFLT` (`int`)**
- **`SIGCLD` (`int`)**
- **`SIGCHLD` (`int`)**
- **`SIGCONT` (`int`)**
- **`SIGSTOP` (`int`)**
- **`SIGTSTP` (`int`)**
- **`SIGTTIN` (`int`)**
- **`SIGTTOU` (`int`)**
- **`SIGURG` (`int`)**
- **`SIGXCPU` (`int`)**
- **`SIGXFSZ` (`int`)**
- **`SIGVTALRM` (`int`)**
- **`SIGPROF` (`int`)**
- **`SIGWINCH` (`int`)**
- **`SIGPOLL` (`int`)**
- **`SIGIO` (`int`)**
- **`SIGPWR` (`int`)**
- **`SIGSYS` (`int`)**
- **`SIGBABY` (`int`)**
- **`SIGRTMIN` (`int`)**
- **`SIGRTMAX` (`int`)**
- **`SIG_BLOCK` (`int`)**
- **`SIG_UNBLOCK` (`int`)**
- **`SIG_SETMASK` (`int`)**
- **`SIGCKPT` (`int`)** — 生成/恢复一个检查点。 从 PHP 8.4.0 开始可用（仅限 DragonFlyBSD）。
- **`SIGCKPTEXIT` (`int`)** — 生成/恢复一个检查点并退出。 从 PHP 8.4.0 开始可用（仅限 DragonFlyBSD）。

- **`SI_USER` (`int`)**
- **`SI_NOINFO` (`int`)**
- **`SI_KERNEL` (`int`)**
- **`SI_QUEUE` (`int`)**
- **`SI_TIMER` (`int`)**
- **`SI_MSGGQ` (`int`)**
- **`SI_ASYNCIO` (`int`)**
- **`SI_SIGIO` (`int`)**
- **`SI_TKILL` (`int`)**
- **`SI_MESGQ` (`int`)**

- **`CLD_EXITED` (`int`)**
- **`CLD_KILLED` (`int`)**
- **`CLD_DUMPED` (`int`)**
- **`CLD_TRAPPED` (`int`)**
- **`CLD_STOPPED` (`int`)**
- **`CLD_CONTINUED` (`int`)**

- **`TRAP_BRKPT` (`int`)**
- **`TRAP_TRACE` (`int`)**

- **`POLL_IN` (`int`)**
- **`POLL_OUT` (`int`)**
- **`POLL_MSG` (`int`)**
- **`POLL_ERR` (`int`)**
- **`POLL_PRI` (`int`)**
- **`POLL_HUP` (`int`)**

- **`ILL_ILLOPC` (`int`)**
- **`ILL_ILLOPN` (`int`)**
- **`ILL_ILLADR` (`int`)**
- **`ILL_ILLTRP` (`int`)**
- **`ILL_PRVOPC` (`int`)**
- **`ILL_PRVREG` (`int`)**
- **`ILL_COPROC` (`int`)**
- **`ILL_BADSTK` (`int`)**

- **`FPE_INTDIV` (`int`)**
- **`FPE_INTOVF` (`int`)**
- **`FPE_FLTDIV` (`int`)**
- **`FPE_FLTOVF` (`int`)**
- **`FPE_FLTUND` (`int`)**
- **`FPE_FLTRES` (`int`)**
- **`FPE_FLTINV` (`int`)**
- **`FPE_FLTSUB` (`int`)**

- **`SEGV_MAPERR` (`int`)**
- **`SEGV_ACCERR` (`int`)**

- **`BUS_ADRALN` (`int`)**
- **`BUS_ADRERR` (`int`)**
- **`BUS_OBJERR` (`int`)**

- **`CLONE_NEWNS` (`int`)** — 从 PHP 7.4.0 起可用
- **`CLONE_NEWIPC` (`int`)** — 从 PHP 7.4.0 起可用
- **`CLONE_NEWUTS` (`int`)** — 从 PHP 7.4.0 起可用
- **`CLONE_NEWNET` (`int`)** — 从 PHP 7.4.0 起可用
- **`CLONE_NEWPID` (`int`)** — 从 PHP 7.4.0 起可用
- **`CLONE_NEWUSER` (`int`)** — 从 PHP 7.4.0 起可用
- **`CLONE_NEWCGROUP` (`int`)** — 从 PHP 7.4.0 起可用

- **`PRIO_PGRP` (`int`)**
- **`PRIO_USER` (`int`)**
- **`PRIO_PROCESS` (`int`)**
- **`PRIO_DARWIN_BG` (`int`)** — 从 PHP 8.1.0 起可用。
- **`PRIO_DARWIN_THREAD` (`int`)** — 从 PHP 8.1.0 起可用。

- **`FORK_NOSIGCHLD` (`int`)**
- **`FORK_WAITPID` (`int`)**

- **`RFCFDG` (`int`)**
- **`RFFDG` (`int`)**
- **`RFLINUXTHPN` (`int`)**
- **`RFNOWAIT` (`int`)**
- **`RFPROC` (`int`)**
- **`RFTHREAD` (`int`)**
- **`RFTSIGZMB` (`int`)**

- **`P_ALL` (`int`)** — 选择任何子进程。
- **`P_PID` (`int`)** — 按进程 ID 选择。
- **`P_PGID` (`int`)** — 按进程组 ID 选择。
- **`P_PIDFD` (`int`)** — 按 PID 文件描述符选择。 仅适用于 Linux（自 Linux 5.4 起）。
- **`P_UID` (`int`)** — 按有效用户 ID 选择。 仅适用于 NetBSD 和 FreeBSD。
- **`P_GID` (`int`)** — 按有效组 ID 选择。 仅适用于 NetBSD 和 FreeBSD。
- **`P_SID` (`int`)** — 按会话 ID 选择。 仅适用于 NetBSD 和 FreeBSD。
- **`P_JAILID` (`int`)** — 按 jail 标识符选择。 仅适用于 FreeBSD。
