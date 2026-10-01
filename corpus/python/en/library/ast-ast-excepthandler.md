---
id: "python-en-function-ast-excepthandler"
language: "python"
lang: "en"
category: "function"
name: "ExceptHandler"
signature: "ExceptHandler(type, name, body)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.ExceptHandler"
license: "PSF"
updated: "2026-10-01"
---

# ExceptHandler

A single `except` clause. `type` is the exception type it will match,
typically a `Name` node (or `None` for a catch-all `except:` clause).
`name` is a raw string for the name to hold the exception, or `None` if
the clause doesn't have `as foo`. `body` is a list of nodes.

```python

>>> print(ast.dump(ast.parse("""\
... try:
...     a + 1
... except TypeError:
...     pass
... """), indent=4))
Module(
    body=[
        Try(
            body=[
                Expr(
                    value=BinOp(
                        left=Name(id='a'),
                        op=Add(),
                        right=Constant(value=1)))],
            handlers=[
                ExceptHandler(
                    type=Name(id='TypeError'),
                    body=[
                        Pass()])])])
```
