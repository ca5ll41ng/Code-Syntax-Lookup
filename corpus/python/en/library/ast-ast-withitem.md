---
id: "python-en-function-ast-withitem"
language: "python"
lang: "en"
category: "function"
name: "withitem"
signature: "withitem(context_expr, optional_vars)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.withitem"
license: "PSF"
updated: "2026-10-01"
---

# withitem

A single context manager in a `with` block. `context_expr` is the context
manager, often a `Call` node. `optional_vars` is a `Name`,
`Tuple` or `List` for the `as foo` part, or `None` if that
isn't used.

```python

>>> print(ast.dump(ast.parse("""\
... with a as b, c as d:
...    something(b, d)
... """), indent=4))
Module(
    body=[
        With(
            items=[
                withitem(
                    context_expr=Name(id='a'),
                    optional_vars=Name(id='b', ctx=Store())),
                withitem(
                    context_expr=Name(id='c'),
                    optional_vars=Name(id='d', ctx=Store()))],
            body=[
                Expr(
                    value=Call(
                        func=Name(id='something'),
                        args=[
                            Name(id='b'),
                            Name(id='d')]))])])
```
