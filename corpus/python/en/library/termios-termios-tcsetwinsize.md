---
id: "python-en-function-termios-tcsetwinsize"
language: "python"
lang: "en"
category: "function"
name: "tcsetwinsize"
signature: "tcsetwinsize(fd, winsize)"
directive: "function"
module: "termios"
source_url: "https://docs.python.org/3/library/termios.html#termios.tcsetwinsize"
license: "PSF"
updated: "2026-10-01"
---

# tcsetwinsize

Set the tty window size for file descriptor *fd* from *winsize*, which is
a two-item tuple `(ws_row, ws_col)` like the one returned by
`tcgetwinsize`. Requires at least one of the pairs
(`termios.TIOCGWINSZ`, `termios.TIOCSWINSZ`);
(`termios.TIOCGSIZE`, `termios.TIOCSSIZE`) to be defined.

> *Added in 3.11*
