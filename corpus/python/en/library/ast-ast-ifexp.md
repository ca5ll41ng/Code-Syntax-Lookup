---
id: "python-en-function-ast-ifexp"
language: "python"
lang: "en"
category: "function"
name: "IfExp"
signature: "IfExp(test, body, orelse)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.IfExp"
license: "PSF"
updated: "2026-10-01"
---

# IfExp

An expression such as `a if b else c`. Each field holds a single node, so
in the following example, all three are `Name` nodes.

```python

>>> print(ast.dump(ast.parse('a if b else c', mode='eval'), indent=4))
Expression(
    body=IfExp(
        test=Name(id='b'),
        body=Name(id='a'),
        orelse=Name(id='c')))
```
