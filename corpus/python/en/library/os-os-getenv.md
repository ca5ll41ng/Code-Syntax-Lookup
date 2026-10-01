---
id: "python-en-function-os-getenv"
language: "python"
lang: "en"
category: "function"
name: "getenv"
signature: "getenv(key, default=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getenv"
license: "PSF"
updated: "2026-10-01"
---

# getenv

Return the value of the environment variable *key* as a string if it exists, or
*default* if it doesn't. *key* is a string. Note that
since `getenv` uses `os.environ`, the mapping of `getenv` is
similarly also captured on import, and the function may not reflect
future environment changes.

On Unix, keys and values are decoded with `sys.getfilesystemencoding`
and `'surrogateescape'` error handler. Use `os.getenvb` if you
would like to use a different encoding.

availability:: Unix, Windows.
