---
id: "python-en-function-ast-lambda"
language: "python"
lang: "en"
category: "function"
name: "Lambda"
signature: "Lambda(args, body)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Lambda"
license: "PSF"
updated: "2026-10-01"
---

# Lambda

`lambda` is a minimal function definition that can be used inside an
expression. Unlike `FunctionDef`, `body` holds a single node.

```python

>>> print(ast.dump(ast.parse('lambda x,y: ...'), indent=4))
Module(
    body=[
        Expr(
            value=Lambda(
                args=arguments(
                    args=[
                        arg(arg='x'),
                        arg(arg='y')]),
                body=Constant(value=Ellipsis)))])
```
