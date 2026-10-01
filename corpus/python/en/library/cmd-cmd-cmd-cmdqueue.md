---
id: "python-en-function-cmd-cmd-cmdqueue"
language: "python"
lang: "en"
category: "function"
name: "Cmd.cmdqueue"
directive: "attribute"
module: "cmd"
source_url: "https://docs.python.org/3/library/cmd.html#cmd.Cmd.cmdqueue"
license: "PSF"
updated: "2026-10-01"
---

# Cmd.cmdqueue

A list of queued input lines.  The cmdqueue list is checked in
`cmdloop` when new input is needed; if it is nonempty, its elements
will be processed in order, as if entered at the prompt.
