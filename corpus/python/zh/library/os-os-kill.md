---
id: "python-zh-function-os-kill"
language: "python"
lang: "zh"
category: "function"
name: "kill"
signature: "kill(pid, sig, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.kill"
license: "PSF"
updated: "2026-10-01"
---

# kill

Send signal *sig* to the process *pid*.  Constants for the specific signals
available on the host platform are defined in the `signal` module.

Windows: The `signal.CTRL_C_EVENT` and
`signal.CTRL_BREAK_EVENT` signals are special signals which can
only be sent to console processes which share a common console window,
e.g., some subprocesses. Any other value for *sig* will cause the process
to be unconditionally killed by the TerminateProcess API, and the exit code
will be set to *sig*.

另请参阅 :func:`signal.pthread_kill`。

audit-event:: os.kill pid,sig os.kill

availability:: Unix, Windows, not WASI, not iOS.

> *Changed in 3.2*: Added Windows support.
