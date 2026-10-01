---
id: "python-en-function-ast-set"
language: "python"
lang: "en"
category: "function"
name: "Set"
signature: "Set(elts)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Set"
license: "PSF"
updated: "2026-10-01"
---

# Set

A set. `elts` holds a list of nodes representing the set's elements.

```python

>>> print(ast.dump(ast.parse('{1, 2, 3}', mode='eval'), indent=4))
Expression(
    body=Set(
        elts=[
            Constant(value=1),
            Constant(value=2),
            Constant(value=3)]))
```
