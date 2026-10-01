---
id: "python-en-function-curses-qiflush"
language: "python"
lang: "en"
category: "function"
name: "qiflush"
signature: "qiflush([flag])"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.qiflush"
license: "PSF"
updated: "2026-10-01"
---

# qiflush

If *flag* is `False`, the effect is the same as calling `noqiflush`. If
*flag* is `True`, or no argument is provided, the queues will be flushed when
these control characters are read.
