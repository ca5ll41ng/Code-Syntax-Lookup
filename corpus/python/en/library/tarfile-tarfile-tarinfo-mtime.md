---
id: "python-en-function-tarfile-tarinfo-mtime"
language: "python"
lang: "en"
category: "function"
name: "TarInfo.mtime"
directive: "attribute"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarInfo.mtime"
license: "PSF"
updated: "2026-10-01"
---

# TarInfo.mtime

Time of last modification in seconds since the `epoch`,
as in `os.stat_result.st_mtime`.

> *Changed in 3.12*: Can be set to ``None`` for :meth:`~TarFile.extract` and :meth:`~TarFile.extractall`, causing extraction to skip applying this attribute.
