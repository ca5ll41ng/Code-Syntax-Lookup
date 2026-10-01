---
id: "python-en-function-curses-window-touchline"
language: "python"
lang: "en"
category: "function"
name: "window.touchline"
signature: "window.touchline(start, count[, changed])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.touchline"
license: "PSF"
updated: "2026-10-01"
---

# window.touchline

Pretend *count* lines have been changed, starting with line *start*.  If
*changed* is supplied, it specifies whether the affected lines are marked as
having been changed (*changed*\ `=True`) or unchanged (*changed*\ `=False`).
