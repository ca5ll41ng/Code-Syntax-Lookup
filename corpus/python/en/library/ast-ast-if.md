---
id: "python-en-function-ast-if"
language: "python"
lang: "en"
category: "function"
name: "If"
signature: "If(test, body, orelse)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.If"
license: "PSF"
updated: "2026-10-01"
---

# If

An `if` statement. `test` holds a single node, such as a `Compare`
node. `body` and `orelse` each hold a list of nodes.

`elif` clauses don't have a special representation in the AST, but rather
appear as extra `If` nodes within the `orelse` section of the
previous one.

```python

>>> print(ast.dump(ast.parse("""
... if x:
...    ...
... elif y:
...    ...
... else:
...    ...
... """), indent=4))
Module(
    body=[
        If(
            test=Name(id='x'),
            body=[
                Expr(
                    value=Constant(value=Ellipsis))],
            orelse=[
                If(
                    test=Name(id='y'),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))],
                    orelse=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```
