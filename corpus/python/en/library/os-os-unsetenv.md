---
id: "python-en-function-os-unsetenv"
language: "python"
lang: "en"
category: "function"
name: "unsetenv"
signature: "unsetenv(key, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.unsetenv"
license: "PSF"
updated: "2026-10-01"
---

# unsetenv

Unset (delete) the environment variable named *key*. Such changes to the
environment affect subprocesses started with `os.system`, `popen` or
`fork` and `execv`.

Deletion of items in `os.environ` is automatically translated into a
corresponding call to `unsetenv`; however, calls to `unsetenv`
don't update `os.environ`, so it is actually preferable to delete items of
`os.environ`.

See also the `os.reload_environ` function.

audit-event:: os.unsetenv key os.unsetenv

> *Changed in 3.9*: The function is now always available and is also available on Windows.
