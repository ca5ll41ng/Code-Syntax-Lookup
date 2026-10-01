---
id: "python-en-function-os-at_no_automount"
language: "python"
lang: "en"
category: "function"
name: "AT_NO_AUTOMOUNT"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.AT_NO_AUTOMOUNT"
license: "PSF"
updated: "2026-10-01"
---

# AT_NO_AUTOMOUNT

If the final component of a path is an automount point, operate on the
automount point instead of performing the automount.  On Linux,
`os.stat`, `os.fstat` and `os.lstat` always behave this
way.

availability:: Linux.

> *Added in 3.15*
