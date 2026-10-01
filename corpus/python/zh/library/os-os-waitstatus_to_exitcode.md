---
id: "python-zh-function-os-waitstatus_to_exitcode"
language: "python"
lang: "zh"
category: "function"
name: "waitstatus_to_exitcode"
signature: "waitstatus_to_exitcode(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.waitstatus_to_exitcode"
license: "PSF"
updated: "2026-10-01"
---

# waitstatus_to_exitcode

将等待状态转换为退出码。

在 Unix 上：

* If the process exited normally (if `WIFEXITED(status)` is true),
  return the process exit status (return `WEXITSTATUS(status)`):
  result greater than or equal to 0.
* If the process was terminated by a signal (if `WIFSIGNALED(status)` is
  true), return `-signum` where *signum* is the number of the signal that
  caused the process to terminate (return `-WTERMSIG(status)`):
  result less than 0.
* Otherwise, raise a `ValueError`.

在 Windows 上，返回 *status* 右移 8 位的结果。

On Unix, if the process is being traced or if `waitpid` was called
with `WUNTRACED` option, the caller must first check if
`WIFSTOPPED(status)` is true. This function must not be called if
`WIFSTOPPED(status)` is true.

> **Seealso**
>
> `WIFEXITED`, `WEXITSTATUS`, `WIFSIGNALED`,
> `WTERMSIG`, `WIFSTOPPED`, `WSTOPSIG` functions.
>

availability:: Unix, Windows, not WASI, not Android, not iOS.

> *Added in 3.9*
