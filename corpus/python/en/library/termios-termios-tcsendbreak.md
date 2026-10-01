---
id: "python-en-function-termios-tcsendbreak"
language: "python"
lang: "en"
category: "function"
name: "tcsendbreak"
signature: "tcsendbreak(fd, duration)"
directive: "function"
module: "termios"
source_url: "https://docs.python.org/3/library/termios.html#termios.tcsendbreak"
license: "PSF"
updated: "2026-10-01"
---

# tcsendbreak

Send a break on file descriptor *fd*.  A zero *duration* sends a break for
0.25--0.5 seconds; a nonzero *duration* has a system dependent meaning.
