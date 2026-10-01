---
id: "python-en-function-os-path-isabs"
language: "python"
lang: "en"
category: "function"
name: "isabs"
signature: "isabs(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.isabs"
license: "PSF"
updated: "2026-10-01"
---

# isabs

Return `True` if *path* is an absolute pathname.  On Unix, that means it
begins with a slash, on Windows that it begins with two (back)slashes, or a
drive letter, colon, and (back)slash together.

> **Seealso**
>
>

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.13*: On Windows, returns ``False`` if the given path starts with exactly one (back)slash.
