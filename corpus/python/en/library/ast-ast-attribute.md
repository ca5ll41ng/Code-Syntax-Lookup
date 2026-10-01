---
id: "python-en-function-ast-attribute"
language: "python"
lang: "en"
category: "function"
name: "Attribute"
signature: "Attribute(value, attr, ctx)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Attribute"
license: "PSF"
updated: "2026-10-01"
---

# Attribute

Attribute access, e.g. `d.keys`. `value` is a node, typically a
`Name`. `attr` is a bare string giving the name of the attribute,
and `ctx` is `Load`, `Store` or `Del` according to how
the attribute is acted on.

```python

>>> print(ast.dump(ast.parse('snake.colour', mode='eval'), indent=4))
Expression(
    body=Attribute(
        value=Name(id='snake'),
        attr='colour'))
```
