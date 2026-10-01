---
id: "python-en-function-tty-cfmakecbreak"
language: "python"
lang: "en"
category: "function"
name: "cfmakecbreak"
signature: "cfmakecbreak(mode)"
directive: "function"
module: "tty"
source_url: "https://docs.python.org/3/library/tty.html#tty.cfmakecbreak"
license: "PSF"
updated: "2026-10-01"
---

# cfmakecbreak

Convert the tty attribute list *mode*, which is a list like the one returned
by `termios.tcgetattr`, to that of a tty in cbreak mode.

This clears the `ECHO` and `ICANON` local mode flags in *mode* as well
as setting the minimum input to 1 byte with no delay.

> *Added in 3.12*

> *Changed in 3.12.2*: The ``ICRNL`` flag is no longer cleared. This matches Linux and macOS ``stty cbreak`` behavior and what :func:`setcbreak` historically did.
