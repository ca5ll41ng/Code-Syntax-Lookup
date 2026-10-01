---
id: "python-en-function-posix-environ"
language: "python"
lang: "en"
category: "function"
name: "environ"
directive: "data"
module: "posix"
source_url: "https://docs.python.org/3/library/posix.html#posix.environ"
license: "PSF"
updated: "2026-10-01"
---

# environ

A dictionary representing the string environment at the time the interpreter
was started. Keys and values are bytes on Unix and str on Windows. For
example, `environ[b'HOME']` (`environ['HOME']` on Windows) is the
pathname of your home directory, equivalent to `getenv("HOME")` in C.

Modifying this dictionary does not affect the string environment passed on by
`~os.execv`, `~os.popen` or `~os.system`; if you need to
change the environment, pass `environ` to `~os.execve` or add
variable assignments and export statements to the command string for
`~os.system` or `~os.popen`.

> *Changed in 3.2*: On Unix, keys and values are bytes.

> **Note**
>
> The `os` module provides an alternate implementation of `environ`
> which updates the environment on modification. Note also that updating
> `os.environ` will render this dictionary obsolete. Use of the
> `os` module version of this is recommended over direct access to the
> `posix` module.
>
