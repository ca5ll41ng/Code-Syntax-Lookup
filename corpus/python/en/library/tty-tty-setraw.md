---
id: "python-en-function-tty-setraw"
language: "python"
lang: "en"
category: "function"
name: "setraw"
signature: "setraw(fd, when=termios.TCSAFLUSH)"
directive: "function"
module: "tty"
source_url: "https://docs.python.org/3/library/tty.html#tty.setraw"
license: "PSF"
updated: "2026-10-01"
---

# setraw

Change the mode of the file descriptor *fd* to raw. If *when* is omitted, it
defaults to `termios.TCSAFLUSH`, and is passed to
`termios.tcsetattr`. The return value of `termios.tcgetattr`
is saved before setting *fd* to raw mode; this value is returned.

> *Changed in 3.12*: The return value is now the original tty attributes, instead of ``None``.
