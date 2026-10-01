---
id: "python-en-function-os-wait3"
language: "python"
lang: "en"
category: "function"
name: "wait3"
signature: "wait3(options)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.wait3"
license: "PSF"
updated: "2026-10-01"
---

# wait3

Similar to `waitpid`, except no process id argument is given and a
3-element tuple containing the child's process id, exit status indication,
and resource usage information is returned.  Refer to
`resource.getrusage` for details on resource usage information.  The
*options* argument is the same as that provided to `waitpid` and
`wait4`.

`waitstatus_to_exitcode` can be used to convert the exit status into an
exitcode.

availability:: Unix, not WASI, not Android, not iOS.
