---
id: "python-en-function-curses-window-idcok"
language: "python"
lang: "en"
category: "function"
name: "window.idcok"
signature: "window.idcok(flag)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.idcok"
license: "PSF"
updated: "2026-10-01"
---

# window.idcok

If *flag* is `False`, curses no longer considers using the hardware insert/delete
character feature of the terminal; if *flag* is `True`, use of character insertion
and deletion is enabled.  When curses is first initialized, use of character
insert/delete is enabled by default.
