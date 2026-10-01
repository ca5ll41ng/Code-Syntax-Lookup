---
id: "python-en-function-os-path-commonprefix"
language: "python"
lang: "en"
category: "function"
name: "commonprefix"
signature: "commonprefix(list, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.commonprefix"
license: "PSF"
updated: "2026-10-01"
---

# commonprefix

Return the longest string prefix (taken character-by-character) that is a
prefix of all strings in *list*.  If *list* is empty, return the empty string
(`''`).

> **Warning**
>
> This function may return invalid paths because it works a
> character at a time.
> If you need a **common path prefix**, then the algorithm
> implemented in this function is not secure. Use
> `commonpath` for finding a common path prefix.
>
> ::
>
>   >>> os.path.commonprefix(['/usr/lib', '/usr/local/lib'])
>   '/usr/l'
>
>   >>> os.path.commonpath(['/usr/lib', '/usr/local/lib'])
>   '/usr'
>

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Deprecated since 3.15*: Deprecated in favor of :func:`os.path.commonpath` for path prefixes. The :func:`os.path.commonprefix` function is being deprecated due to having a misleading name and module. The function is not safe to use for path prefixes despite being included in a module about path manipulation, meaning it is easy to accidentally introduce path traversal vulnerabilities into Python programs by using this function.
