---
id: "python-en-function-ast-binop"
language: "python"
lang: "en"
category: "function"
name: "BinOp"
signature: "BinOp(left, op, right)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.BinOp"
license: "PSF"
updated: "2026-10-01"
---

# BinOp

A binary operation (like addition or division). `op` is the operator, and
`left` and `right` are any expression nodes.

```python

>>> print(ast.dump(ast.parse('x + y', mode='eval'), indent=4))
Expression(
    body=BinOp(
        left=Name(id='x'),
        op=Add(),
        right=Name(id='y')))
```
