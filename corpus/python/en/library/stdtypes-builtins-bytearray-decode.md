---
id: "python-en-function-builtins-bytearray-decode"
language: "python"
lang: "en"
category: "function"
name: "bytearray.decode"
signature: "bytearray.decode(encoding=\"utf-8\", errors=\"strict\")"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.decode"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.decode

Return the bytes decoded to a `str`.

*encoding* defaults to `'utf-8'`;
see `standard-encodings` for possible values.

*errors* controls how decoding errors are handled.
If `'strict'` (the default), a `UnicodeError` exception is raised.
Other possible values are `'ignore'`, `'replace'`,
and any other name registered via `codecs.register_error`.
See `error-handlers` for details.

For performance reasons, the value of *errors* is not checked for validity
unless a decoding error actually occurs,
`devmode` is enabled or a `debug build` is used.

> **Note**
>
> Passing the *encoding* argument to `str` allows decoding any
> `bytes-like object` directly, without needing to make a temporary
> `bytes` or `bytearray` object.
>

> *Changed in 3.1*: Added support for keyword arguments.

> *Changed in 3.9*: The value of the *errors* argument is now checked in :ref:`devmode` and in :ref:`debug mode <debug-build>`.
