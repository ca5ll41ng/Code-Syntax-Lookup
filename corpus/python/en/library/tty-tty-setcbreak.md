---
id: "python-en-function-tty-setcbreak"
language: "python"
lang: "en"
category: "function"
name: "setcbreak"
signature: "setcbreak(fd, when=termios.TCSAFLUSH)"
directive: "function"
module: "tty"
source_url: "https://docs.python.org/3/library/tty.html#tty.setcbreak"
license: "PSF"
updated: "2026-10-01"
---

# setcbreak

Change the mode of file descriptor *fd* to cbreak. If *when* is omitted, it
defaults to `termios.TCSAFLUSH`, and is passed to
`termios.tcsetattr`. The return value of `termios.tcgetattr`
is saved before setting *fd* to cbreak mode; this value is returned.

This clears the `ECHO` and `ICANON` local mode flags as well as setting
the minimum input to 1 byte with no delay.

> *Changed in 3.12*: The return value is now the original tty attributes, instead of ``None``.

> *Changed in 3.12.2*: The ``ICRNL`` flag is no longer cleared. This restores the behavior of Python 3.11 and earlier as well as matching what Linux, macOS, & BSDs describe in their ``stty(1)`` man pages regarding cbreak mode.
