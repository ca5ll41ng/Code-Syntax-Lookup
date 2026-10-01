---
id: "python-en-function-os-execvpe"
language: "python"
lang: "en"
category: "function"
name: "execvpe"
signature: "execvpe(file, args, env)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.execvpe"
license: "PSF"
updated: "2026-10-01"
---

# execvpe

These functions all execute a new program, replacing the current process; they
do not return.  On Unix, the new executable is loaded into the current process,
and will have the same process id as the caller.  Errors will be reported as
`OSError` exceptions.

The current process is replaced immediately. Open file objects and
descriptors are not flushed, so if there may be data buffered
on these open files, you should flush them using
`~io.IOBase.flush` or `os.fsync` before calling an
`exec\*` function.

The "l" and "v" variants of the `exec\*` functions differ in how
command-line arguments are passed.  The "l" variants are perhaps the easiest
to work with if the number of parameters is fixed when the code is written; the
individual parameters simply become additional parameters to the `execl\*`
functions.  The "v" variants are good when the number of parameters is
variable, with the arguments being passed in a list or tuple as the *args*
parameter.  In either case, the arguments to the child process should start with
the name of the command being run, but this is not enforced.

The variants which include a "p" near the end (`execlp`,
`execlpe`, `execvp`, and `execvpe`) will use the
`PATH` environment variable to locate the program *file*.  When the
environment is being replaced (using one of the `exec\*e` variants,
discussed in the next paragraph), the new environment is used as the source of
the `PATH` variable. The other variants, `execl`, `execle`,
`execv`, and `execve`, will not use the `PATH` variable to
locate the executable; *path* must contain an appropriate absolute or relative
path. Relative paths must include at least one slash, even on Windows, as
plain names will not be resolved.

For `execle`, `execlpe`, `execve`, and `execvpe` (note
that these all end in "e"), the *env* parameter must be a mapping which is
used to define the environment variables for the new process (these are used
instead of the current process' environment); the functions `execl`,
`execlp`, `execv`, and `execvp` all cause the new process to
inherit the environment of the current process.

For `execve` on some platforms, *path* may also be specified as an open
file descriptor.  This functionality may not be supported on your platform;
you can check whether or not it is available using `os.supports_fd`.
If it is unavailable, using it will raise a `NotImplementedError`.

audit-event:: os.exec path,args,env os.execl

availability:: Unix, Windows, not WASI, not Android, not iOS.

> *Changed in 3.3*: Added support for specifying *path* as an open file descriptor for :func:`execve`.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
