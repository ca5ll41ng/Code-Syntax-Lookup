---
id: "python-en-function-os-environ"
language: "python"
lang: "en"
category: "function"
name: "environ"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.environ"
license: "PSF"
updated: "2026-10-01"
---

# environ

A `mapping` object where keys and values are strings that represent
the process environment.  For example, `environ['HOME']` is the pathname
of your home directory (on some platforms), and is equivalent to
`getenv("HOME")` in C.

This mapping is captured the first time the `os` module is imported,
typically during Python startup as part of processing `site.py`.  Changes
to the environment made after this time are not reflected in `os.environ`,
except for changes made by modifying `os.environ` directly.

This mapping may be used to modify the environment as well as query the
environment.  `putenv` will be called automatically when the mapping
is modified.

On Unix, keys and values use `sys.getfilesystemencoding` and
`'surrogateescape'` error handler. Use `environb` if you would like
to use a different encoding.

On Windows, the keys are converted to uppercase. This also applies when
getting, setting, or deleting an item. For example,
`environ['monty'] = 'python'` maps the key `'MONTY'` to the value
`'python'`.

> **Note**
>
> Calling `putenv` directly does not change `os.environ`, so it's better
> to modify `os.environ`.
>

> **Note**
>
> On some platforms, including FreeBSD and macOS, setting `environ` may
> cause memory leaks.  Refer to the system documentation for
> :c`putenv`.
>

You can delete items in this mapping to unset environment variables.
`unsetenv` will be called automatically when an item is deleted from
`os.environ`, and when one of the `~dict.pop` or
`~dict.clear` methods is called.

If the `clearenv(3)` function is available, the `~dict.clear` method
uses it and emits a single `os._clearenv` audit event. Otherwise, it emits
an `os.unsetenv` event on each deleted variable.

audit-event:: os.unsetenv key os.unsetenv

audit-event:: os._clearenv "" os._clearenv

> **Seealso**
>
> The `os.reload_environ` function.
>

> *Changed in 3.9*: Updated to support :pep:`584`'s merge (``|``) and update (``|=``) operators.

> *Changed in 3.15*: The :meth:`~dict.clear` method can now emit an ``os._clearenv`` audit event.
