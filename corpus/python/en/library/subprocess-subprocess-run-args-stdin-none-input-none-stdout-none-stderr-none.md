---
id: "python-en-function-subprocess-run-args-stdin-none-input-none-stdout-none-stderr-none"
language: "python"
lang: "en"
category: "function"
name: "run(args, *, stdin=None, input=None, stdout=None, stderr=None,\\"
directive: "function"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.run(args, *, stdin=None, input=None, stdout=None, stderr=None,\\"
license: "PSF"
updated: "2026-10-01"
---

# run(args, *, stdin=None, input=None, stdout=None, stderr=None,\

Run the command described by *args*.  Wait for command to complete, then
return a `CompletedProcess` instance.

The arguments shown above are merely the most common ones, described below
in `frequently-used-arguments` (hence the use of keyword-only notation
in the abbreviated signature). The full function signature is largely the
same as that of the `Popen` constructor - most of the arguments to
this function are passed through to that interface. (*timeout*,  *input*,
*check*, and *capture_output* are not.)

If *capture_output* is true, stdout and stderr will be captured.
When used, the internal `Popen` object is automatically created with
*stdout* and *stderr* both set to `~subprocess.PIPE`.
The *stdout* and *stderr* arguments may not be supplied at the same time as *capture_output*.
If you wish to capture and combine both streams into one,
set *stdout* to `~subprocess.PIPE`
and *stderr* to `~subprocess.STDOUT`,
instead of using *capture_output*.

A *timeout* may be specified in seconds, it is internally passed on to
`Popen.communicate`. If the timeout expires, the child process will be
killed and waited for. The `TimeoutExpired` exception will be
re-raised after the child process has terminated. The initial process
creation itself cannot be interrupted on many platform APIs so you are not
guaranteed to see a timeout exception until at least after however long
process creation takes.

The *input* argument is passed to `Popen.communicate` and thus to the
subprocess's stdin.  If used it must be a byte sequence, or a string if
*encoding* or *errors* is specified or *text* is true.  When
used, the internal `Popen` object is automatically created with
*stdin* set to `~subprocess.PIPE`,
and the *stdin* argument may not be used as well.

If *check* is true, and the process exits with a non-zero exit code, a
`CalledProcessError` exception will be raised. Attributes of that
exception hold the arguments, the exit code, and stdout and stderr if they
were captured.

If *encoding* or *errors* are specified, or *text* is true,
file objects for stdin, stdout and stderr are opened in text mode using the
specified *encoding* and *errors* or the `io.TextIOWrapper` default.
The *universal_newlines* argument is equivalent  to *text* and is provided
for backwards compatibility. By default, file objects are opened in binary mode.

If *env* is not `None`, it must be a mapping that defines the environment
variables for the new process; these are used instead of the default
behavior of inheriting the current process' environment. It is passed
directly to `Popen`. This mapping can be str to str on any platform
or bytes to bytes on POSIX platforms much like `os.environ` or
`os.environb`.

Examples::

   >>> subprocess.run(["ls", "-l"])  # doesn't capture output
   CompletedProcess(args=['ls', '-l'], returncode=0)

   >>> subprocess.run("exit 1", shell=True, check=True)
   Traceback (most recent call last):
     ...
   subprocess.CalledProcessError: Command 'exit 1' returned non-zero exit status 1

   >>> subprocess.run(["ls", "-l", "/dev/null"], capture_output=True)
   CompletedProcess(args=['ls', '-l', '/dev/null'], returncode=0,
   stdout=b'crw-rw-rw- 1 root root 1, 3 Jan 23 16:23 /dev/null\n', stderr=b'')

> *Added in 3.5*

> *Changed in 3.6*: Added *encoding* and *errors* parameters

> *Changed in 3.7*: Added the *text* parameter, as a more understandable alias of *universal_newlines*. Added the *capture_output* parameter.

> *Changed in 3.12*: Changed Windows shell search order for ``shell=True``. The current directory and ``%PATH%`` are replaced with ``%COMSPEC%`` and ``%SystemRoot%\System32\cmd.exe``. As a result, dropping a malicious program named ``cmd.exe`` into a current directory no longer works.
