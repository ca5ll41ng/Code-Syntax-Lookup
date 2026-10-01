---
id: "python-en-function-ast-for"
language: "python"
lang: "en"
category: "function"
name: "For"
signature: "For(target, iter, body, orelse, type_comment)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.For"
license: "PSF"
updated: "2026-10-01"
---

# For

A `for` loop. `target` holds the variable(s) the loop assigns to, as a
single `Name`, `Tuple`, `List`, `Attribute` or
`Subscript` node. `iter` holds the item to be looped over, again
as a single node. `body` and `orelse` contain lists of nodes to execute.
Those in `orelse` are executed if the loop finishes normally, rather than
via a `break` statement.

attribute:: type_comment

```python

>>> print(ast.dump(ast.parse("""
... for x in y:
...     ...
... else:
...     ...
... """), indent=4))
Module(
    body=[
        For(
            target=Name(id='x', ctx=Store()),
            iter=Name(id='y'),
            body=[
                Expr(
                    value=Constant(value=Ellipsis))],
            orelse=[
                Expr(
                    value=Constant(value=Ellipsis))])])
```
