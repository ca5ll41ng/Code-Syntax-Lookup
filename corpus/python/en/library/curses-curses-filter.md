---
id: "python-en-function-curses-filter"
language: "python"
lang: "en"
category: "function"
name: "filter"
signature: "filter()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.filter"
license: "PSF"
updated: "2026-10-01"
---

# filter

The `.filter` routine, if used, must be called before `initscr`
or `newterm` is called,
and affects every screen created afterwards.
The effect is that, during the initialization, `LINES` is set to `1`; the
capabilities `clear`, `cup`, `cud`, `cud1`, `cuu1`, `cuu`, `vpa` are disabled; and the `home`
string is set to the value of `cr`. The effect is that the cursor is confined to
the current line, and so are screen updates.  This may be used for enabling
character-at-a-time  line editing without touching the rest of the screen.
