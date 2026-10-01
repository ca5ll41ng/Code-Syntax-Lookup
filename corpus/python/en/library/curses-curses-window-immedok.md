---
id: "python-en-function-curses-window-immedok"
language: "python"
lang: "en"
category: "function"
name: "window.immedok"
signature: "window.immedok(flag)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.immedok"
license: "PSF"
updated: "2026-10-01"
---

# window.immedok

If *flag* is `True`, any change in the window image automatically causes the
window to be refreshed; you no longer have to call `refresh` yourself.
However, it may degrade performance considerably, due to repeated calls to
wrefresh.  This option is disabled by default.
