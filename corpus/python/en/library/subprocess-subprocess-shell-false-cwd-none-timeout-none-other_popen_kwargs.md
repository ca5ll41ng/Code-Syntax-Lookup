---
id: "python-en-function-subprocess-shell-false-cwd-none-timeout-none-other_popen_kwargs"
language: "python"
lang: "en"
category: "function"
name: "shell=False, cwd=None, timeout=None, **other_popen_kwargs)"
directive: "function"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.shell=False, cwd=None, timeout=None, **other_popen_kwargs)"
license: "PSF"
updated: "2026-10-01"
---

# shell=False, cwd=None, timeout=None, **other_popen_kwargs)

Run the command described by *args*.  Wait for command to complete, then
return the `~Popen.returncode` attribute.

Code needing to capture stdout or stderr should use `run` instead::

    run(...).returncode

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
