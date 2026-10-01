---
id: "python-en-function-zipapp-get_interpreter"
language: "python"
lang: "en"
category: "function"
name: "get_interpreter"
signature: "get_interpreter(archive)"
directive: "function"
module: "zipapp"
source_url: "https://docs.python.org/3/library/zipapp.html#zipapp.get_interpreter"
license: "PSF"
updated: "2026-10-01"
---

# get_interpreter

Return the interpreter specified in the `#!` line at the start of the
archive.  If there is no `#!` line, return `None`.
The *archive* argument can be a filename or a file-like object open
for reading in bytes mode.  It is assumed to be at the start of the archive.
