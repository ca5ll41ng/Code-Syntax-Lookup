---
id: "python-en-function-tarfile-tarfile-addfile"
language: "python"
lang: "en"
category: "function"
name: "TarFile.addfile"
signature: "TarFile.addfile(tarinfo, fileobj=None)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.addfile"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.addfile

Add the `TarInfo` object *tarinfo* to the archive. If *tarinfo* represents
a non zero-size regular file, the *fileobj* argument should be a `binary file`,
and `tarinfo.size` bytes are read from it and added to the archive.  You can
create `TarInfo` objects directly, or by using `gettarinfo`.

> *Changed in 3.13*: *fileobj* must be given for non-zero-sized regular files.
