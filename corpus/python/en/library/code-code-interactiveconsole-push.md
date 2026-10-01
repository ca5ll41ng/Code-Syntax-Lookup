---
id: "python-en-function-code-interactiveconsole-push"
language: "python"
lang: "en"
category: "function"
name: "InteractiveConsole.push"
signature: "InteractiveConsole.push(line)"
directive: "method"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveConsole.push"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveConsole.push

Push a line of source text to the interpreter. The line should not have a
trailing newline; it may have internal newlines.  The line is appended to a
buffer and the interpreter's `~InteractiveInterpreter.runsource` method is called with the
concatenated contents of the buffer as source.  If this indicates that the
command was executed or invalid, the buffer is reset; otherwise, the command is
incomplete, and the buffer is left as it was after the line was appended.  The
return value is `True` if more input is required, `False` if the line was
dealt with in some way (this is the same as `runsource`).
