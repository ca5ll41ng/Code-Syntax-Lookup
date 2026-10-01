---
id: "python-en-function-ast-while"
language: "python"
lang: "en"
category: "function"
name: "While"
signature: "While(test, body, orelse)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.While"
license: "PSF"
updated: "2026-10-01"
---

# While

A `while` loop. `test` holds the condition, such as a `Compare`
node.

```python

>>> print(ast.dump(ast.parse("""
... while x:
...    ...
... else:
...    ...
... """), indent=4))
Module(
    body=[
        While(
            test=Name(id='x'),
            body=[
                Expr(
                    value=Constant(value=Ellipsis))],
            orelse=[
                Expr(
                    value=Constant(value=Ellipsis))])])
```
