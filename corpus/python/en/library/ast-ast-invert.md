---
id: "python-en-function-ast-invert"
language: "python"
lang: "en"
category: "function"
name: "Invert"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Invert"
license: "PSF"
updated: "2026-10-01"
---

# Invert

Unary operator tokens. `Not` is the `not` keyword, `Invert`
is the `~` operator.

```python

>>> print(ast.dump(ast.parse('not x', mode='eval'), indent=4))
Expression(
    body=UnaryOp(
        op=Not(),
        operand=Name(id='x')))
```
