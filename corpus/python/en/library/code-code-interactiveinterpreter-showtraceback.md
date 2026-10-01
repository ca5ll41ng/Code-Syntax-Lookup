---
id: "python-en-function-code-interactiveinterpreter-showtraceback"
language: "python"
lang: "en"
category: "function"
name: "InteractiveInterpreter.showtraceback"
signature: "InteractiveInterpreter.showtraceback()"
directive: "method"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveInterpreter.showtraceback"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveInterpreter.showtraceback

Display the exception that just occurred.  We remove the first stack item
because it is within the interpreter object implementation. The output is
written by the `write` method.

> *Changed in 3.5 The full chained traceback is displayed instead*: of just the primary traceback.
