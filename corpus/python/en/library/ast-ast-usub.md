---
id: "python-en-function-ast-usub"
language: "python"
lang: "en"
category: "function"
name: "USub"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.USub"
license: "PSF"
updated: "2026-10-01"
---

# USub

Unary operator tokens. `Not` is the `not` keyword, `Invert`
is the `~` operator.

```python

>>> print(ast.dump(ast.parse('not x', mode='eval'), indent=4))
Expression(
    body=UnaryOp(
        op=Not(),
        operand=Name(id='x')))
```
