---
id: "python-en-function-ast-try"
language: "python"
lang: "en"
category: "function"
name: "Try"
signature: "Try(body, handlers, orelse, finalbody)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Try"
license: "PSF"
updated: "2026-10-01"
---

# Try

`try` blocks. All attributes are list of nodes to execute, except for
`handlers`, which is a list of `ExceptHandler` nodes.

```python

>>> print(ast.dump(ast.parse("""
... try:
...    ...
... except Exception:
...    ...
... except OtherException as e:
...    ...
... else:
...    ...
... finally:
...    ...
... """), indent=4))
Module(
    body=[
        Try(
            body=[
                Expr(
                    value=Constant(value=Ellipsis))],
            handlers=[
                ExceptHandler(
                    type=Name(id='Exception'),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))]),
                ExceptHandler(
                    type=Name(id='OtherException'),
                    name='e',
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])],
            orelse=[
                Expr(
                    value=Constant(value=Ellipsis))],
            finalbody=[
                Expr(
                    value=Constant(value=Ellipsis))])])
```
