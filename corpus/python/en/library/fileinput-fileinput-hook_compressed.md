---
id: "python-en-function-fileinput-hook_compressed"
language: "python"
lang: "en"
category: "function"
name: "hook_compressed"
signature: "hook_compressed(filename, mode, *, encoding=None, errors=None)"
directive: "function"
module: "fileinput"
source_url: "https://docs.python.org/3/library/fileinput.html#fileinput.hook_compressed"
license: "PSF"
updated: "2026-10-01"
---

# hook_compressed

Transparently opens files compressed with gzip and bzip2 (recognized by the
extensions `'.gz'` and `'.bz2'`) using the `gzip` and `bz2`
modules.  If the filename extension is not `'.gz'` or `'.bz2'`, the file is
opened normally (ie, using `open` without any decompression).

The *encoding* and *errors* values are passed to `io.TextIOWrapper`
for compressed files and open for normal files.

Usage example:  `fi = fileinput.FileInput(openhook=fileinput.hook_compressed, encoding="utf-8")`

> *Changed in 3.10*: The keyword-only parameter *encoding* and *errors* are added.
