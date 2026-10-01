---
id: "python-en-function-os-linesep"
language: "python"
lang: "en"
category: "function"
name: "linesep"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.linesep"
license: "PSF"
updated: "2026-10-01"
---

# linesep

The string used to separate (or, rather, terminate) lines on the current
platform.  This may be a single character, such as `'\n'` for POSIX, or
multiple characters, for example, `'\r\n'` for Windows. Do not use
*os.linesep* as a line terminator when writing files opened in text mode (the
default); use a single `'\n'` instead, on all platforms.
