---
id: "python-en-function-code-interactiveconsole-raw_input"
language: "python"
lang: "en"
category: "function"
name: "InteractiveConsole.raw_input"
signature: "InteractiveConsole.raw_input(prompt=\"\")"
directive: "method"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveConsole.raw_input"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveConsole.raw_input

Write a prompt and read a line.  The returned line does not include the trailing
newline.  When the user enters the EOF key sequence, `EOFError` is raised.
The base implementation reads from `sys.stdin`; a subclass may replace this
with a different implementation.
