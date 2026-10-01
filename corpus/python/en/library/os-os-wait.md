---
id: "python-en-function-os-wait"
language: "python"
lang: "en"
category: "function"
name: "wait"
signature: "wait()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.wait"
license: "PSF"
updated: "2026-10-01"
---

# wait

Wait for completion of a child process, and return a tuple containing its pid
and exit status indication: a 16-bit number, whose low byte is the signal number
that killed the process, and whose high byte is the exit status (if the signal
number is zero); the high bit of the low byte is set if a core file was
produced.

If there are no children that could be waited for, `ChildProcessError`
is raised.

`waitstatus_to_exitcode` can be used to convert the exit status into an
exit code.

availability:: Unix, not WASI, not Android, not iOS.

> **Seealso**
>
> The other `wait*` functions documented below can be used to wait for the
> completion of a specific child process and have more options.
> `waitpid` is the only one also available on Windows.
>
