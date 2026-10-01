---
id: "python-en-function-subprocess-check_call-args-stdin-none-stdout-none-stderr-none"
language: "python"
lang: "en"
category: "function"
name: "check_call(args, *, stdin=None, stdout=None, stderr=None, \\"
directive: "function"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.check_call(args, *, stdin=None, stdout=None, stderr=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# check_call(args, *, stdin=None, stdout=None, stderr=None, \

Run command with arguments.  Wait for command to complete. If the return
code was zero then return, otherwise raise `CalledProcessError`. The
`CalledProcessError` object will have the return code in the
`~CalledProcessError.returncode` attribute.
If `check_call` was unable to start the process it will propagate the exception
that was raised.

Code needing to capture stdout or stderr should use `run` instead::

    run(..., check=True)

To suppress stdout or stderr, supply a value of `DEVNULL`.

The arguments shown above are merely some common ones.
The full function signature is the
same as that of the `Popen` constructor - this function passes all
supplied arguments other than *timeout* directly through to that interface.

> **Note**
>
> Do not use `stdout=PIPE` or `stderr=PIPE` with this
> function.  The child process will block if it generates enough
> output to a pipe to fill up the OS pipe buffer as the pipes are
> not being read from.
>

> *Changed in 3.3*: *timeout* was added.

> *Changed in 3.12*: Changed Windows shell search order for ``shell=True``. The current directory and ``%PATH%`` are replaced with ``%COMSPEC%`` and ``%SystemRoot%\System32\cmd.exe``. As a result, dropping a malicious program named ``cmd.exe`` into a current directory no longer works.
