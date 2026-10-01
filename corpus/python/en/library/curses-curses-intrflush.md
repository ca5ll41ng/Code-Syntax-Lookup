---
id: "python-en-function-curses-intrflush"
language: "python"
lang: "en"
category: "function"
name: "intrflush"
signature: "intrflush(flag)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.intrflush"
license: "PSF"
updated: "2026-10-01"
---

# intrflush

If *flag* is `True`, pressing an interrupt key (interrupt, break, or quit)
will flush all output in the terminal driver queue.  If *flag* is `False`,
no flushing is done.
