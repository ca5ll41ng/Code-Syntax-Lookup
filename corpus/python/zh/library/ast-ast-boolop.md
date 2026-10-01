---
id: "python-zh-function-ast-boolop"
language: "python"
lang: "zh"
category: "function"
name: "BoolOp"
signature: "BoolOp(op, values)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.BoolOp"
license: "PSF"
updated: "2026-10-01"
---

# BoolOp

A boolean operation, 'or' or 'and'. `op` is `Or` or `And`.
`values` are the values involved. Consecutive operations with the same
operator, such as `a or b or c`, are collapsed into one node with several
values.

这不包括 ``not``，它属于 :class:`UnaryOp`。

```python

>>> print(ast.dump(ast.parse('x or y', mode='eval'), indent=4))
Expression(
    body=BoolOp(
        op=Or(),
        values=[
            Name(id='x'),
            Name(id='y')]))
```
