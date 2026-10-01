---
id: "python-en-function-zipfile-zipfile-mkdir"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.mkdir"
signature: "ZipFile.mkdir(zinfo_or_directory, mode=511)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.mkdir"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.mkdir

Create a directory inside the archive.  If *zinfo_or_directory* is a string,
a directory is created inside the archive with the mode that is specified in
the *mode* argument. If, however, *zinfo_or_directory* is
a `ZipInfo` instance then the *mode* argument is ignored.

The archive must be opened with mode `'w'`, `'x'` or `'a'`.

> *Added in 3.11*
