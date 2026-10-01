---
id: "python-en-function-sqlite3-enable_callback_tracebacks"
language: "python"
lang: "en"
category: "function"
name: "enable_callback_tracebacks"
signature: "enable_callback_tracebacks(flag, /)"
directive: "function"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.enable_callback_tracebacks"
license: "PSF"
updated: "2026-10-01"
---

# enable_callback_tracebacks

Enable or disable callback tracebacks.
By default you will not get any tracebacks in user-defined functions,
aggregates, converters, authorizer callbacks etc. If you want to debug them,
you can call this function with *flag* set to `True`. Afterwards, you
will get tracebacks from callbacks on `sys.stderr`. Use `False`
to disable the feature again.

> **Note**
>
> Errors in user-defined function callbacks are logged as unraisable exceptions.
> Use an `unraisable hook handler` for
> introspection of the failed callback.
>
