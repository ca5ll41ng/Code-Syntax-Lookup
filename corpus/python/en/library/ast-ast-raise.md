---
id: "python-en-function-ast-raise"
language: "python"
lang: "en"
category: "function"
name: "Raise"
signature: "Raise(exc, cause)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Raise"
license: "PSF"
updated: "2026-10-01"
---

# Raise

A `raise` statement. `exc` is the exception object to be raised, normally a
`Call` or `Name`, or `None` for a standalone `raise`.
`cause` is the optional part for `y` in `raise x from y`.

```python

>>> print(ast.dump(ast.parse('raise x from y'), indent=4))
Module(
    body=[
        Raise(
            exc=Name(id='x'),
            cause=Name(id='y'))])
```
