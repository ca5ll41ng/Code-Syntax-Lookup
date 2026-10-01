---
id: "python-en-function-tarfile-tarfile-extractfile"
language: "python"
lang: "en"
category: "function"
name: "TarFile.extractfile"
signature: "TarFile.extractfile(member)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.extractfile"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.extractfile

Extract a member from the archive as a file object. *member* may be
a filename or a `TarInfo` object. If *member* is a regular file or
a link, an `io.BufferedReader` object is returned. For all other
existing members, `None` is returned. If *member* does not appear
in the archive, `KeyError` is raised.

> *Changed in 3.3*: Return an :class:`io.BufferedReader` object.

> *Changed in 3.13*: The returned :class:`io.BufferedReader` object has the :attr:`!mode` attribute which is always equal to ``'rb'``.
