---
id: "python-en-function-ast-listcomp"
language: "python"
lang: "en"
category: "function"
name: "ListComp"
signature: "ListComp(elt, generators)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.ListComp"
license: "PSF"
updated: "2026-10-01"
---

# ListComp

List and set comprehensions, generator expressions, and dictionary
comprehensions. `elt` (or `key` and `value`) is a single node
representing the part that will be evaluated for each item.

For dictionary comprehensions using unpacking, for example
`{**item for item in items}`, the expression to be expanded goes in
`key` and `value` is `None`.

`generators` is a list of `comprehension` nodes.

```python

>>> print(ast.dump(
...     ast.parse('[x for x in numbers]', mode='eval'),
...     indent=4,
... ))
Expression(
    body=ListComp(
        elt=Name(id='x'),
        generators=[
            comprehension(
                target=Name(id='x', ctx=Store()),
                iter=Name(id='numbers'),
                is_async=0)]))
>>> print(ast.dump(
...     ast.parse('{x: x**2 for x in numbers}', mode='eval'),
...     indent=4,
... ))
Expression(
    body=DictComp(
        key=Name(id='x'),
        value=BinOp(
            left=Name(id='x'),
            op=Pow(),
            right=Constant(value=2)),
        generators=[
            comprehension(
                target=Name(id='x', ctx=Store()),
                iter=Name(id='numbers'),
                is_async=0)]))
>>> print(ast.dump(
...     ast.parse('{x for x in numbers}', mode='eval'),
...     indent=4,
... ))
Expression(
    body=SetComp(
        elt=Name(id='x'),
        generators=[
            comprehension(
                target=Name(id='x', ctx=Store()),
                iter=Name(id='numbers'),
                is_async=0)]))
```
