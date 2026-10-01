---
id: "python-en-function-tarfile-tarfile-getmember"
language: "python"
lang: "en"
category: "function"
name: "TarFile.getmember"
signature: "TarFile.getmember(name)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.getmember"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.getmember

Return a `TarInfo` object for member *name*. If *name* can not be found
in the archive, `KeyError` is raised.

> **Note**
>
> If a member occurs more than once in the archive, its last occurrence is assumed
> to be the most up-to-date version.
>
