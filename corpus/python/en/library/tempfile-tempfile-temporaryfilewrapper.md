---
id: "python-en-function-tempfile-temporaryfilewrapper"
language: "python"
lang: "en"
category: "function"
name: "TemporaryFileWrapper"
signature: "TemporaryFileWrapper(file, name, delete=True, delete_on_close=True)"
directive: "class"
module: "tempfile"
source_url: "https://docs.python.org/3/library/tempfile.html#tempfile.TemporaryFileWrapper"
license: "PSF"
updated: "2026-10-01"
---

# TemporaryFileWrapper

A mutable wrapper returned by `NamedTemporaryFile`. It wraps the
underlying file object, delegating attribute access to it, and ensures
the temporary file is deleted when appropriate.

attribute:: file

attribute:: name

method:: close()

> **Note**
>
> `tempfile._TemporaryFileWrapper` is kept as a backwards compatible
> deprecated alias for this class.
> It will be removed in Python 3.21
>

> *Added in next*
