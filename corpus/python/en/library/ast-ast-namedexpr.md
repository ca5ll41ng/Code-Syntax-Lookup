---
id: "python-en-function-ast-namedexpr"
language: "python"
lang: "en"
category: "function"
name: "NamedExpr"
signature: "NamedExpr(target, value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.NamedExpr"
license: "PSF"
updated: "2026-10-01"
---

# NamedExpr

A named expression. This AST node is produced by the assignment expressions
operator (also known as the walrus operator). As opposed to the `Assign`
node in which the first argument can be multiple nodes, in this case both
`target` and `value` must be single nodes.

```python

>>> print(ast.dump(ast.parse('(x := 4)', mode='eval'), indent=4))
Expression(
    body=NamedExpr(
        target=Name(id='x', ctx=Store()),
        value=Constant(value=4)))
```

> *Added in 3.8*
