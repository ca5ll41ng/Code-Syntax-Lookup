---
id: "python-en-function-termios-tcgetwinsize"
language: "python"
lang: "en"
category: "function"
name: "tcgetwinsize"
signature: "tcgetwinsize(fd)"
directive: "function"
module: "termios"
source_url: "https://docs.python.org/3/library/termios.html#termios.tcgetwinsize"
license: "PSF"
updated: "2026-10-01"
---

# tcgetwinsize

Return a tuple `(ws_row, ws_col)` containing the tty window size for file
descriptor *fd*. Requires `termios.TIOCGWINSZ` or
`termios.TIOCGSIZE`.

> *Added in 3.11*
