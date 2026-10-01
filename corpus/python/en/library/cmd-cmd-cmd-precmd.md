---
id: "python-en-function-cmd-cmd-precmd"
language: "python"
lang: "en"
category: "function"
name: "Cmd.precmd"
signature: "Cmd.precmd(line)"
directive: "method"
module: "cmd"
source_url: "https://docs.python.org/3/library/cmd.html#cmd.Cmd.precmd"
license: "PSF"
updated: "2026-10-01"
---

# Cmd.precmd

Hook method executed just before the command line *line* is interpreted, but
after the input prompt is generated and issued.  This method is a stub in
`Cmd`; it exists to be overridden by subclasses.  The return value is
used as the command which will be executed by the `onecmd` method; the
`precmd` implementation may re-write the command or simply return *line*
unchanged.
