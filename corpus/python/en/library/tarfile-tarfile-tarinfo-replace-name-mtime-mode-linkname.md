---
id: "python-en-function-tarfile-tarinfo-replace-name-mtime-mode-linkname"
language: "python"
lang: "en"
category: "function"
name: "TarInfo.replace(name=..., mtime=..., mode=..., linkname=..., \\"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarInfo.replace(name=..., mtime=..., mode=..., linkname=..., \\"
license: "PSF"
updated: "2026-10-01"
---

# TarInfo.replace(name=..., mtime=..., mode=..., linkname=..., \

> *Added in 3.12*

Return a *new* copy of the `TarInfo` object with the given attributes
changed. For example, to return a `TarInfo` with the group name set to
`'staff'`, use::

    new_tarinfo = old_tarinfo.replace(gname='staff')

By default, a deep copy is made.
If *deep* is false, the copy is shallow, i.e. `pax_headers`
and any custom attributes are shared with the original `TarInfo` object.

This method is also used by `copy.replace`.

> *Changed in next*: Added support for :func:`copy.replace`.
