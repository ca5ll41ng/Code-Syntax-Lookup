---
id: "python-en-function-dis-show_code"
language: "python"
lang: "en"
category: "function"
name: "show_code"
signature: "show_code(x, *, file=None)"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.show_code"
license: "PSF"
updated: "2026-10-01"
---

# show_code

Print detailed code object information for the supplied function, method,
source code string or code object to *file* (or `sys.stdout` if *file*
is not specified).

This is a convenient shorthand for `print(code_info(x), file=file)`,
intended for interactive exploration at the interpreter prompt.

> *Added in 3.2*

> *Changed in 3.4*: Added *file* parameter.
