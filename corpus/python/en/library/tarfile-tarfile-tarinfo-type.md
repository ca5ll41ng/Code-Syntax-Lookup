---
id: "python-en-function-tarfile-tarinfo-type"
language: "python"
lang: "en"
category: "function"
name: "TarInfo.type"
directive: "attribute"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarInfo.type"
license: "PSF"
updated: "2026-10-01"
---

# TarInfo.type

File type.  *type* is usually one of these constants: `REGTYPE`,
`AREGTYPE`, `LNKTYPE`, `SYMTYPE`, `DIRTYPE`,
`FIFOTYPE`, `CONTTYPE`, `CHRTYPE`, `BLKTYPE`,
`GNUTYPE_SPARSE`.  To determine the type of a `TarInfo` object
more conveniently, use the `is*()` methods below.
