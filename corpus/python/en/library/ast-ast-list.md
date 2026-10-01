---
id: "python-en-function-ast-list"
language: "python"
lang: "en"
category: "function"
name: "List"
signature: "List(elts, ctx)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.List"
license: "PSF"
updated: "2026-10-01"
---

# List

A list or tuple. `elts` holds a list of nodes representing the elements.
`ctx` is `Store` if the container is an assignment target (i.e.
`(x,y)=something`), and `Load` otherwise.

```python

>>> print(ast.dump(ast.parse('[1, 2, 3]', mode='eval'), indent=4))
Expression(
    body=List(
        elts=[
            Constant(value=1),
            Constant(value=2),
            Constant(value=3)]))
>>> print(ast.dump(ast.parse('(1, 2, 3)', mode='eval'), indent=4))
Expression(
    body=Tuple(
        elts=[
            Constant(value=1),
            Constant(value=2),
            Constant(value=3)]))
```
