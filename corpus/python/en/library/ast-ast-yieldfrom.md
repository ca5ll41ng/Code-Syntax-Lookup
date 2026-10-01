---
id: "python-en-function-ast-yieldfrom"
language: "python"
lang: "en"
category: "function"
name: "YieldFrom"
signature: "YieldFrom(value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.YieldFrom"
license: "PSF"
updated: "2026-10-01"
---

# YieldFrom

A `yield` or `yield from` expression. Because these are expressions, they
must be wrapped in an `Expr` node if the value sent back is not used.

```python

>>> print(ast.dump(ast.parse('yield x'), indent=4))
Module(
    body=[
        Expr(
            value=Yield(
                value=Name(id='x')))])

>>> print(ast.dump(ast.parse('yield from x'), indent=4))
Module(
    body=[
        Expr(
            value=YieldFrom(
                value=Name(id='x')))])
```
