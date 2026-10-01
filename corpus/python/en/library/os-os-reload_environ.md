---
id: "python-en-function-os-reload_environ"
language: "python"
lang: "en"
category: "function"
name: "reload_environ"
signature: "reload_environ()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.reload_environ"
license: "PSF"
updated: "2026-10-01"
---

# reload_environ

The `os.environ` and `os.environb` mappings are a cache of
environment variables at the time that Python started.
As such, changes to the current process environment are not reflected
if made outside Python, or by `os.putenv` or `os.unsetenv`.
Use `os.reload_environ` to update `os.environ` and `os.environb`
with any such changes to the current process environment.

> **Warning**
>
> This function is not thread-safe. Calling it while the environment is
> being modified in another thread is an undefined behavior. Reading from
> `os.environ` or `os.environb`, or calling `os.getenv`
> while reloading, may return an empty result.
>

> *Added in 3.14*
