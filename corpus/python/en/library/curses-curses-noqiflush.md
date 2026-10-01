---
id: "python-en-function-curses-noqiflush"
language: "python"
lang: "en"
category: "function"
name: "noqiflush"
signature: "noqiflush()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.noqiflush"
license: "PSF"
updated: "2026-10-01"
---

# noqiflush

When the `noqiflush` routine is used, normal flush of input and output queues
associated with the `INTR`, `QUIT` and `SUSP` characters will not be done.  You may
want to call `noqiflush` in a signal handler if you want output to
continue as though the interrupt had not occurred, after the handler exits.
