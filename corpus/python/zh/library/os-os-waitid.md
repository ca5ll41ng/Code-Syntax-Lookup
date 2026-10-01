---
id: "python-zh-function-os-waitid"
language: "python"
lang: "zh"
category: "function"
name: "waitid"
signature: "waitid(idtype, id, options, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.waitid"
license: "PSF"
updated: "2026-10-01"
---

# waitid

等待一个子进程完成。

*idtype* can be `P_PID`, `P_PGID`, `P_ALL`, or (on Linux) `P_PIDFD`.
The interpretation of *id* depends on it; see their individual descriptions.

*options* is an OR combination of flags.  At least one of `WEXITED`,
`WSTOPPED` or `WCONTINUED` is required;
`WNOHANG` and `WNOWAIT` are additional optional flags.

The return value is an object representing the data contained in the
:c`siginfo_t` structure with the following attributes:

* `si_pid` (process ID)
* `si_uid` (real user ID of the child)
* `si_signo` (always `~signal.SIGCHLD`)
* `si_status` (the exit status or signal number, depending on `si_code`)
* `si_code` (see `CLD_EXITED` for possible values)

If `WNOHANG` is specified and there are no matching children in the
requested state, `None` is returned.
Otherwise, if there are no matching children
that could be waited for, `ChildProcessError` is raised.

availability:: Unix, not WASI, not Android, not iOS.

> *Added in 3.3*

> *Changed in 3.13*: This function is now available on macOS as well.
