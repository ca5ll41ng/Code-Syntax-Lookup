---
id: "en-php-guide-posix-constants"
language: "php"
lang: "en"
category: "guide"
name: "posix.constants"
title: "Predefined Constants"
module: "posix"
source_url: "https://www.php.net/manual/en/posix.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

## `posix_access()` constants

> Please note that some of these constants may not be available on every system.

- **`POSIX_F_OK` (`int`)** — Check whether the file exists.
- **`POSIX_R_OK` (`int`)** — Check whether the file exists and has read permissions.
- **`POSIX_W_OK` (`int`)** — Check whether the file exists and has write permissions.
- **`POSIX_X_OK` (`int`)** — Check whether the file exists and has execute permissions.

## `posix_mknod()` constants

> Please note that some of them may not be available on your system.

- **`POSIX_S_IFBLK` (`int`)** — Block special file
- **`POSIX_S_IFCHR` (`int`)** — Character special file
- **`POSIX_S_IFIFO` (`int`)** — FIFO (named pipe) special file
- **`POSIX_S_IFREG` (`int`)** — Normal file
- **`POSIX_S_IFSOCK` (`int`)** — Socket

## `posix_setrlimit()` constants

> Please note that some of them may not be available on your system.

> You may wish to read the below notes in conjunction with the manpage for `setrlimit()` on your specific operating system, as there is variance in how these limits are interpreted, even across operating systems that claim to implement POSIX in full.

- **`POSIX_RLIMIT_AS` (`int`)** — The maximum size of the process's address space in bytes. See also PHP's memory_limit configuration directive.
- **`POSIX_RLIMIT_CORE` (`int`)** — The maximum size of a core file. If the limit is set to 0, no core file will be generated.
- **`POSIX_RLIMIT_CPU` (`int`)** — The maximum amount of CPU time that the process can use, in seconds. When the soft limit is hit, a `SIGXCPU` signal will be sent, which can be caught with `pcntl_signal()`. Depending on the operating system, additional `SIGXCPU` signals may be sent each second until the hard limit is hit, at which point an uncatchable `SIGKILL` signal is sent. — See also `set_time_limit()`.
- **`POSIX_RLIMIT_DATA` (`int`)** — The maximum size of the process's data segment, in bytes. It is extremely unlikely that this will have any effect on the execution of PHP unless an extension is in use that calls `brk()` or `sbrk()`.
- **`POSIX_RLIMIT_FSIZE` (`int`)** — The maximum size of files that the process can create, in bytes.
- **`POSIX_RLIMIT_LOCKS` (`int`)** — The maximum number of locks that the process can create. This is only supported on extremely old Linux kernels.
- **`POSIX_RLIMIT_MEMLOCK` (`int`)** — The maximum number of bytes that can be locked into memory.
- **`POSIX_RLIMIT_MSGQUEUE` (`int`)** — The maximum number of bytes that can be allocated for POSIX message queues. PHP does not ship with support for POSIX message queues, so this limit will not have any effect unless you are using an extension that implements that support.
- **`POSIX_RLIMIT_NICE` (`int`)** — The maximum value to which the process can be reniced to. The value that will be used will be `20 - limit`, as resource limit values cannot be negative.
- **`POSIX_RLIMIT_NOFILE` (`int`)** — A value one greater than the maximum file descriptor number that can be opened by this process.
- **`POSIX_RLIMIT_NPROC` (`int`)** — The maximum number of processes (and/or threads, on some operating systems) that can be created for the real user ID of the process.
- **`POSIX_RLIMIT_RSS` (`int`)** — The maximum size of the process's resident set, in pages.
- **`POSIX_RLIMIT_RTPRIO` (`int`)** — The maximum real time priority that can be set via the `sched_setscheduler()` and `sched_setparam()` system calls.
- **`POSIX_RLIMIT_RTTIME` (`int`)** — The maximum amount of CPU time, in microseconds, that the process can consume without making a blocking system call if it is using real time scheduling.
- **`POSIX_RLIMIT_SIGPENDING` (`int`)** — The maximum number of signals that can be queued for the real user ID of the process.
- **`POSIX_RLIMIT_STACK` (`int`)** — The maximum size of the process stack, in bytes.
- **`POSIX_RLIMIT_INFINITY` (`int`)** — Used to indicate an infinite value for a resource limit.
- **`POSIX_RLIMIT_KQUEUES` (`int`)** — The maximum number of kqueues this user id is allowed to create (FreeBSD). Available as of PHP 8.1.0.
- **`POSIX_RLIMIT_NPTS` (`int`)** — The maximum number of pseudo-terminals this user id is allowed to create (FreeBSD). Available as of PHP 8.1.0.

## `posix_pathconf()` constants

- **`POSIX_PC_LINK_MAX` (`int`)** — The maximum number of links a given file or directory can have. Available as of PHP 8.3.0.
- **`POSIX_PC_MAX_CANON` (`int`)** — The maximum number of bytes in a terminal canonical input buffer (pathname being then a character special file). Available as of PHP 8.3.0.
- **`POSIX_PC_MAX_INPUT` (`int`)** — The maximum number of bytes of a terminal input queue (pathname being then a character special file). Available as of PHP 8.3.0.
- **`POSIX_PC_NAME_MAX` (`int`)** — The maximum number of characters for a file name alone, not its path. Available as of PHP 8.3.0.
- **`POSIX_PC_PATH_MAX` (`int`)** — The maximum number of characters for a full path name. Available as of PHP 8.3.0.
- **`POSIX_PC_PIPE_BUF` (`int`)** — The maximum number of bytes that can be written to a pipe in one operation. Available as of PHP 8.3.0.
- **`POSIX_PC_CHOWN_RESTRICTED` (`int`)** — If privileges are required to be allow `chown()` to work. Available as of PHP 8.3.0.
- **`POSIX_PC_NO_TRUNC` (`int`)** — If a file name (or files under a directory) is longer than `POSIX_PC_NAME_MAX`. Available as of PHP 8.3.0.
- **`POSIX_PC_ALLOC_SIZE_MIN` (`int`)** — The minimum number of bytes of storage allocated for any portion of a file. Available as of PHP 8.3.0.
- **`POSIX_PC_ALLOC_SYMLINK_MAX` (`int`)** — The maximum number of symbolic links a given file or directory can have. Available as of PHP 8.3.0.
- **`POSIX_PC_SYMLINK_MAX` (`int`)** — The maximum number of bytes in a symbolic link. Available as of PHP 8.3.0.

## `posix_sysconf()` constants

- **`POSIX_SC_ARG_MAX` (`int`)** — The maximum number of bytes the arguments (and environment variables) can have. Available as of PHP 8.3.0.
- **`POSIX_SC_PAGESIZE` (`int`)** — The number of bytes of the current page. Available as of PHP 8.3.0.
- **`POSIX_SC_NPROCESSORS_CONF` (`int`)** — The number of cpus configured system wise. Available as of PHP 8.3.0.
- **`POSIX_SC_NPROCESSORS_ONLN` (`int`)** — The number of cpus currently active system wise. Available as of PHP 8.3.0.
- **`POSIX_SC_CHILD_MAX` (`int`)** — The maximum number of simultaneous processes per user. Available as of PHP 8.4.0.
- **`POSIX_SC_CLK_TCK` (`int`)** — The number of clock ticks per second. Available as of PHP 8.4.0.
