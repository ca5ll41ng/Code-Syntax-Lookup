---
id: "python-en-function-os-getenvb"
language: "python"
lang: "en"
category: "function"
name: "getenvb"
signature: "getenvb(key, default=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getenvb"
license: "PSF"
updated: "2026-10-01"
---

# getenvb

Return the value of the environment variable *key* as bytes if it exists, or
*default* if it doesn't. *key* must be bytes. Note that
since `getenvb` uses `os.environb`, the mapping of `getenvb` is
similarly also captured on import, and the function may not reflect
future environment changes.

`getenvb` is only available if `supports_bytes_environ`
is `True`.

availability:: Unix.

> *Added in 3.2*
