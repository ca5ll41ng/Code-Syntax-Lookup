---
id: "python-en-function-ast-expr"
language: "python"
lang: "en"
category: "function"
name: "Expr"
signature: "Expr(value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Expr"
license: "PSF"
updated: "2026-10-01"
---

# Expr

When an expression, such as a function call, appears as a statement by itself
with its return value not used or stored, it is wrapped in this container.
`value` holds one of the other nodes in this section, a `Constant`, a
`Name`, a `Lambda`, a `Yield` or `YieldFrom` node.

```python

>>> print(ast.dump(ast.parse('-a'), indent=4))
Module(
    body=[
        Expr(
            value=UnaryOp(
                op=USub(),
                operand=Name(id='a')))])
```
