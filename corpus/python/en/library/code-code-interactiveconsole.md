---
id: "python-en-function-code-interactiveconsole"
language: "python"
lang: "en"
category: "function"
name: "InteractiveConsole"
signature: "InteractiveConsole(locals=None, filename=\"<console>\", *, local_exit=False)"
directive: "class"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveConsole"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveConsole

Closely emulate the behavior of the interactive Python interpreter. This class
builds on `InteractiveInterpreter` and adds prompting using the familiar
`sys.ps1` and `sys.ps2`, and input buffering. If *local_exit* is true,
`exit()` and `quit()` in the console will not raise `SystemExit`, but
instead return to the calling code.

> *Changed in 3.13*: Added *local_exit* parameter.
