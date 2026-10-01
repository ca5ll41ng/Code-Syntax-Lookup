---
id: "python-en-function-os-wait4"
language: "python"
lang: "en"
category: "function"
name: "wait4"
signature: "wait4(pid, options)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.wait4"
license: "PSF"
updated: "2026-10-01"
---

# wait4

Similar to `waitpid`, except a 3-element tuple, containing the child's
process id, exit status indication, and resource usage information is
returned.  Refer to `resource.getrusage` for details on resource usage
information.  The arguments to `wait4` are the same as those provided
to `waitpid`.

`waitstatus_to_exitcode` can be used to convert the exit status into an
exitcode.

availability:: Unix, not WASI, not Android, not iOS.
