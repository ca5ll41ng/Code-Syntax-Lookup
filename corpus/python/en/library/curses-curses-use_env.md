---
id: "python-en-function-curses-use_env"
language: "python"
lang: "en"
category: "function"
name: "use_env"
signature: "use_env(flag)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.use_env"
license: "PSF"
updated: "2026-10-01"
---

# use_env

If used, this function should be called before `initscr` or
`newterm` are called,
and affects every screen created afterwards.
When *flag* is `False`, the values of lines and columns specified in the
terminfo database will be used, even if environment variables `LINES`
and `COLUMNS` (used by default) are set, or if curses is running in a
window (in which case default behavior would be to use the window size if
`LINES` and `COLUMNS` are not set).
