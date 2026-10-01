---
id: "python-en-function-bz2-bzlib_version_info"
language: "python"
lang: "en"
category: "function"
name: "bzlib_version_info"
directive: "data"
module: "bz2"
source_url: "https://docs.python.org/3/library/bz2.html#bz2.bzlib_version_info"
license: "PSF"
updated: "2026-10-01"
---

# bzlib_version_info

A named tuple containing the three components of the bzip2 compression
library version actually loaded by the interpreter:
*major*, *minor*, and *patch*.  All values are integers.
The components can also be accessed by name, so `bz2.bzlib_version_info[0]`
is equivalent to `bz2.bzlib_version_info.major` and so on.

> *Added in next*
