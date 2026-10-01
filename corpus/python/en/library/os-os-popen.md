---
id: "python-en-function-os-popen"
language: "python"
lang: "en"
category: "function"
name: "popen"
signature: "popen(cmd, mode='r', buffering=-1)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.popen"
license: "PSF"
updated: "2026-10-01"
---

# popen

Open a pipe to or from command *cmd*.
The return value is an open file object
connected to the pipe, which can be read or written depending on whether *mode*
is `'r'` (default) or `'w'`.
The *buffering* argument have the same meaning as
the corresponding argument to the built-in `open` function. The
returned file object reads or writes text strings rather than bytes.

The `close` method returns `None` if the subprocess exited
successfully, or the subprocess's return code if there was an
error. On POSIX systems, if the return code is positive it
represents the return value of the process left-shifted by one
byte.  If the return code is negative, the process was terminated
by the signal given by the negated value of the return code.  (For
example, the return value might be `- signal.SIGKILL` if the
subprocess was killed.)  On Windows systems, the return value
contains the signed integer return code from the child process.

On Unix, `waitstatus_to_exitcode` can be used to convert the `close`
method result (exit status) into an exit code if it is not `None`. On
Windows, the `close` method result is directly the exit code
(or `None`).

This is implemented using `subprocess.Popen`; see that class's
documentation for more powerful ways to manage and communicate with
subprocesses.

availability:: not WASI, not Android, not iOS.

> **Note**
>
> The `Python UTF-8 Mode` affects encodings used
> for *cmd* and pipe contents.
>
> `popen` is a simple wrapper around `subprocess.Popen`.
> Use `subprocess.Popen` or `subprocess.run` to
> control options like encodings.
>

soft-deprecated:: 3.14
