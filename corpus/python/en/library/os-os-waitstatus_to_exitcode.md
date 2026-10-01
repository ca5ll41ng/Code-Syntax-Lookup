---
id: "python-en-function-os-waitstatus_to_exitcode"
language: "python"
lang: "en"
category: "function"
name: "waitstatus_to_exitcode"
signature: "waitstatus_to_exitcode(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.waitstatus_to_exitcode"
license: "PSF"
updated: "2026-10-01"
---

# waitstatus_to_exitcode

Convert a wait status to an exit code.

On Unix:

* If the process exited normally (if `WIFEXITED(status)` is true),
  return the process exit status (return `WEXITSTATUS(status)`):
  result greater than or equal to 0.
* If the process was terminated by a signal (if `WIFSIGNALED(status)` is
  true), return `-signum` where *signum* is the number of the signal that
  caused the process to terminate (return `-WTERMSIG(status)`):
  result less than 0.
* Otherwise, raise a `ValueError`.

On Windows, return *status* shifted right by 8 bits.

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
