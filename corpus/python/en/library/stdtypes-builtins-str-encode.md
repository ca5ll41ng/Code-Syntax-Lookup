---
id: "python-en-function-builtins-str-encode"
language: "python"
lang: "en"
category: "function"
name: "str.encode"
signature: "str.encode(encoding=\"utf-8\", errors=\"strict\")"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.encode"
license: "PSF"
updated: "2026-10-01"
---

# str.encode

Return the string encoded to `bytes`.

*encoding* defaults to `'utf-8'`;
see `standard-encodings` for possible values.

*errors* controls how encoding errors are handled.
If `'strict'` (the default), a `UnicodeError` exception is raised.
Other possible values are `'ignore'`,
`'replace'`, `'xmlcharrefreplace'`, `'backslashreplace'` and any
other name registered via `codecs.register_error`.
See `error-handlers` for details.

For performance reasons, the value of *errors* is not checked for validity
unless an encoding error actually occurs,
`devmode` is enabled
or a `debug build` is used.
For example::

   >>> encoded_str_to_bytes = 'Python'.encode()
   >>> type(encoded_str_to_bytes)
   <class 'bytes'>
   >>> encoded_str_to_bytes
   b'Python'

> *Changed in 3.1*: Added support for keyword arguments.

> *Changed in 3.9*: The value of the *errors* argument is now checked in :ref:`devmode` and in :ref:`debug mode <debug-build>`.
