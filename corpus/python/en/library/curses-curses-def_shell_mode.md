---
id: "python-en-function-curses-def_shell_mode"
language: "python"
lang: "en"
category: "function"
name: "def_shell_mode"
signature: "def_shell_mode()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.def_shell_mode"
license: "PSF"
updated: "2026-10-01"
---

# def_shell_mode

Save the current terminal mode as the "shell" mode, the mode when the running
program is not using curses.  (Its counterpart is the "program" mode, when the
program is using curses capabilities.) Subsequent calls to
`reset_shell_mode` will restore this mode.
