---
id: "python-en-function-cmd-cmd-do_help"
language: "python"
lang: "en"
category: "function"
name: "Cmd.do_help"
signature: "Cmd.do_help(arg)"
directive: "method"
module: "cmd"
source_url: "https://docs.python.org/3/library/cmd.html#cmd.Cmd.do_help"
license: "PSF"
updated: "2026-10-01"
---

# Cmd.do_help

All subclasses of `Cmd` inherit a predefined `do_help`.  This
method, called with an argument `'bar'`, invokes the corresponding method
`help_bar`, and if that is not present, prints the docstring of
`do_bar`, if available.  With no argument, `do_help` lists all
available help topics (that is, all commands with corresponding
`help_\*` methods or commands that have docstrings), and also lists any
undocumented commands.
