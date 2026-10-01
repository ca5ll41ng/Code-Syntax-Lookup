---
id: "python-en-function-ast-trystar"
language: "python"
lang: "en"
category: "function"
name: "TryStar"
signature: "TryStar(body, handlers, orelse, finalbody)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.TryStar"
license: "PSF"
updated: "2026-10-01"
---

# TryStar

`try` blocks which are followed by `except*` clauses. The attributes are the
same as for `Try` but the `ExceptHandler` nodes in `handlers`
are interpreted as `except*` blocks rather than `except`.

```python

>>> print(ast.dump(ast.parse("""
... try:
...    ...
... except* Exception:
...    ...
... """), indent=4))
Module(
    body=[
        TryStar(
            body=[
                Expr(
                    value=Constant(value=Ellipsis))],
            handlers=[
                ExceptHandler(
                    type=Name(id='Exception'),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.11*
