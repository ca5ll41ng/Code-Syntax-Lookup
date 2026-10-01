---
id: "python-en-function-curses-panel-new_panel"
language: "python"
lang: "en"
category: "function"
name: "new_panel"
signature: "new_panel(win)"
directive: "function"
module: "curses.panel"
source_url: "https://docs.python.org/3/library/curses.panel.html#curses.panel.new_panel"
license: "PSF"
updated: "2026-10-01"
---

# new_panel

Returns a panel object, associating it with the given window *win* and
placing the new panel on top of the panel stack.  Be aware
that you need to keep the returned panel object referenced explicitly.  If you
don't, the panel object is garbage collected and removed from the panel stack.
