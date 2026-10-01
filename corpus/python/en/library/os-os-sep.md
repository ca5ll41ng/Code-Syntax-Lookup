---
id: "python-en-function-os-sep"
language: "python"
lang: "en"
category: "function"
name: "sep"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sep"
license: "PSF"
updated: "2026-10-01"
---

# sep

The character used by the operating system to separate pathname components.
This is `'/'` for POSIX and `'\\'` for Windows.  Note that knowing this
is not sufficient to be able to parse or concatenate pathnames --- use
`os.path.split` and `os.path.join` --- but it is occasionally
useful. Also available via `os.path`.
