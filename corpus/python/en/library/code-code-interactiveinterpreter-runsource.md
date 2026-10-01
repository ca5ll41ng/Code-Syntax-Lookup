---
id: "python-en-function-code-interactiveinterpreter-runsource"
language: "python"
lang: "en"
category: "function"
name: "InteractiveInterpreter.runsource"
signature: "InteractiveInterpreter.runsource(source, filename=\"<input>\", symbol=\"single\")"
directive: "method"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveInterpreter.runsource"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveInterpreter.runsource

Compile and run some source in the interpreter. Arguments are the same as for
`compile_command`; the default for *filename* is `'<input>'`, and for
*symbol* is `'single'`.  One of several things can happen:

* The input is incorrect; `compile_command` raised an exception
  (usually `SyntaxError`).  A syntax traceback will be
  printed by calling the `showsyntaxerror` method.  `runsource`
  returns `False`.

* The input is incomplete, and more input is required; `compile_command`
  returned `None`. `runsource` returns `True`.

* The input is complete; `compile_command` returned a code object.  The
  code is executed by calling the `runcode` (which also handles run-time
  exceptions, except for `SystemExit`). `runsource` returns `False`.

The return value can be used to decide whether to use `sys.ps1` or `sys.ps2`
to prompt the next line.
