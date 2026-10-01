---
id: "python-en-function-termios-tcflow"
language: "python"
lang: "en"
category: "function"
name: "tcflow"
signature: "tcflow(fd, action)"
directive: "function"
module: "termios"
source_url: "https://docs.python.org/3/library/termios.html#termios.tcflow"
license: "PSF"
updated: "2026-10-01"
---

# tcflow

Suspend or resume input or output on file descriptor *fd*.  The *action*
argument can be `TCOOFF` to suspend output, `TCOON` to restart
output, `TCIOFF` to suspend input, or `TCION` to restart input.
