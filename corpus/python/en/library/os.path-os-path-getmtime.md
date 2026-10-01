---
id: "python-en-function-os-path-getmtime"
language: "python"
lang: "en"
category: "function"
name: "getmtime"
signature: "getmtime(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.getmtime"
license: "PSF"
updated: "2026-10-01"
---

# getmtime

Return the time of last modification of *path*.  The return value is a floating-point number
giving the number of seconds since the epoch (see the  `time` module).
Raise `OSError` if the file does not exist or is inaccessible.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
