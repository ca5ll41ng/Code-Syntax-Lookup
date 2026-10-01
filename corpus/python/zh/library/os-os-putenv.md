---
id: "python-zh-function-os-putenv"
language: "python"
lang: "zh"
category: "function"
name: "putenv"
signature: "putenv(key, value, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.putenv"
license: "PSF"
updated: "2026-10-01"
---

# putenv

Set the environment variable named *key* to the string *value*.  Such
changes to the environment affect subprocesses started with `os.system`,
`popen` or `fork` and `execv`.

Assignments to items in `os.environ` are automatically translated into
corresponding calls to `putenv`; however, calls to `putenv`
don't update `os.environ`, so it is actually preferable to assign to items
of `os.environ`. This also applies to `getenv` and `getenvb`, which
respectively use `os.environ` and `os.environb` in their implementations.

另请参阅 :func:`os.reload_environ` 函数。

> **Note**
>
> On some platforms, including FreeBSD and macOS, setting `environ` may
> cause memory leaks. Refer to the system documentation for :c`putenv`.
>

audit-event:: os.putenv key,value os.putenv

> *Changed in 3.9*: The function is now always available.
