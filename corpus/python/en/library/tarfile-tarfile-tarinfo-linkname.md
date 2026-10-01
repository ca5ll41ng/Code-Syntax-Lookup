---
id: "python-en-function-tarfile-tarinfo-linkname"
language: "python"
lang: "en"
category: "function"
name: "TarInfo.linkname"
directive: "attribute"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarInfo.linkname"
license: "PSF"
updated: "2026-10-01"
---

# TarInfo.linkname

Name of the target file name, which is only present in `TarInfo` objects
of type `LNKTYPE` and `SYMTYPE`.

For symbolic links (`SYMTYPE`), the *linkname* is relative to the directory
that contains the link.
For hard links (`LNKTYPE`), the *linkname* is relative to the root of
the archive.
