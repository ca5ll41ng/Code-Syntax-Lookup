---
id: "python-en-function-termios-tcflush"
language: "python"
lang: "en"
category: "function"
name: "tcflush"
signature: "tcflush(fd, queue)"
directive: "function"
module: "termios"
source_url: "https://docs.python.org/3/library/termios.html#termios.tcflush"
license: "PSF"
updated: "2026-10-01"
---

# tcflush

Discard queued data on file descriptor *fd*.  The *queue* selector specifies
which queue: `TCIFLUSH` for the input queue, `TCOFLUSH` for the
output queue, or `TCIOFLUSH` for both queues.
