---
id: "python-en-function-sys-executable"
language: "python"
lang: "en"
category: "function"
name: "executable"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.executable"
license: "PSF"
updated: "2026-10-01"
---

# executable

A string giving the absolute path of the executable binary for the Python
interpreter, on systems where this makes sense. If Python is unable to retrieve
the real path to its executable, `sys.executable` will be an empty string
or `None`.
