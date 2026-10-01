---
id: "python-en-function-curses-def_prog_mode"
language: "python"
lang: "en"
category: "function"
name: "def_prog_mode"
signature: "def_prog_mode()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.def_prog_mode"
license: "PSF"
updated: "2026-10-01"
---

# def_prog_mode

Save the current terminal mode as the "program" mode, the mode when the running
program is using curses.  (Its counterpart is the "shell" mode, for when the
program is not in curses.)  Subsequent calls to `reset_prog_mode` will
restore this mode.
