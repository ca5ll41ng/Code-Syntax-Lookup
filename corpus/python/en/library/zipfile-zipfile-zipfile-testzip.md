---
id: "python-en-function-zipfile-zipfile-testzip"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.testzip"
signature: "ZipFile.testzip()"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.testzip"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.testzip

Read all the files in the archive and check their CRC's and file headers.
Return the name of the first bad file, or else return `None`.

> *Changed in 3.6*: Calling :meth:`testzip` on a closed ZipFile will raise a :exc:`ValueError`.  Previously, a :exc:`RuntimeError` was raised.
