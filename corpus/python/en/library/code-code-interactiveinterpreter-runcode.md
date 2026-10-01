---
id: "python-en-function-code-interactiveinterpreter-runcode"
language: "python"
lang: "en"
category: "function"
name: "InteractiveInterpreter.runcode"
signature: "InteractiveInterpreter.runcode(code)"
directive: "method"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveInterpreter.runcode"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveInterpreter.runcode

Execute a code object. When an exception occurs, `showtraceback` is called
to display a traceback.  All exceptions are caught except `SystemExit`,
which is allowed to propagate.

A note about `KeyboardInterrupt`: this exception may occur elsewhere in
this code, and may not always be caught.  The caller should be prepared to deal
with it.
