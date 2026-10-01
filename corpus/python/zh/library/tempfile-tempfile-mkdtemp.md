---
id: "python-zh-function-tempfile-mkdtemp"
language: "python"
lang: "zh"
category: "function"
name: "mkdtemp"
signature: "mkdtemp(suffix=None, prefix=None, dir=None)"
directive: "function"
module: "tempfile"
source_url: "https://docs.python.org/zh-cn/3/library/tempfile.html#tempfile.mkdtemp"
license: "PSF"
updated: "2026-10-01"
---

# mkdtemp

Creates a temporary directory in the most secure manner possible. There
are no race conditions in the directory's creation.  The directory is
readable, writable, and searchable only by the creating user ID.

The user of `mkdtemp` is responsible for deleting the temporary
directory and its contents when done with it.

The *prefix*, *suffix*, and *dir* arguments are the same as for
`mkstemp`.

:func:`mkdtemp` 返回新目录的绝对路径。

audit-event:: tempfile.mkdtemp fullpath tempfile.mkdtemp

> *Changed in 3.5*: *suffix*, *prefix*, and *dir* may now be supplied in bytes in order to obtain a bytes return value.  Prior to this, only str was allowed. *suffix* and *prefix* now accept and default to ``None`` to cause an appropriate default value to be used.

> *Changed in 3.6*: The *dir* parameter now accepts a :term:`path-like object`.

> *Changed in 3.12*: :func:`mkdtemp` now always returns an absolute path, even if *dir* is relative.
