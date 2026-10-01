---
id: "python-en-function-code-interactiveinterpreter-showsyntaxerror"
language: "python"
lang: "en"
category: "function"
name: "InteractiveInterpreter.showsyntaxerror"
signature: "InteractiveInterpreter.showsyntaxerror(filename=None)"
directive: "method"
module: "code"
source_url: "https://docs.python.org/3/library/code.html#code.InteractiveInterpreter.showsyntaxerror"
license: "PSF"
updated: "2026-10-01"
---

# InteractiveInterpreter.showsyntaxerror

Display the syntax error that just occurred.  This does not display a stack
trace because there isn't one for syntax errors. If *filename* is given, it is
stuffed into the exception instead of the default filename provided by Python's
parser, because it always uses `'<string>'` when reading from a string. The
output is written by the `write` method.
