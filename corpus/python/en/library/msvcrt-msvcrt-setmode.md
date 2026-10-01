---
id: "python-en-function-msvcrt-setmode"
language: "python"
lang: "en"
category: "function"
name: "setmode"
signature: "setmode(fd, flags)"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.setmode"
license: "PSF"
updated: "2026-10-01"
---

# setmode

Set the line-end translation mode for the file descriptor *fd*. To set it to
text mode, *flags* should be `os.O_TEXT`; for binary, it should be
`os.O_BINARY`.
