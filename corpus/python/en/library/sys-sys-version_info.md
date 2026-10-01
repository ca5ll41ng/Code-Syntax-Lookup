---
id: "python-en-function-sys-version_info"
language: "python"
lang: "en"
category: "function"
name: "version_info"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.version_info"
license: "PSF"
updated: "2026-10-01"
---

# version_info

A tuple containing the five components of the version number: *major*, *minor*,
*micro*, *releaselevel*, and *serial*.  All values except *releaselevel* are
integers; the release level is `'alpha'`, `'beta'`, `'candidate'`, or
`'final'`.  The `version_info` value corresponding to the Python version 2.0
is `(2, 0, 0, 'final', 0)`.  The components can also be accessed by name,
so `sys.version_info[0]` is equivalent to `sys.version_info.major`
and so on.

> *Changed in 3.1*: Added named component attributes.
