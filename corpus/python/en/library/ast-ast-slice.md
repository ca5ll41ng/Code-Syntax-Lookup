---
id: "python-en-function-ast-slice"
language: "python"
lang: "en"
category: "function"
name: "Slice"
signature: "Slice(lower, upper, step)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Slice"
license: "PSF"
updated: "2026-10-01"
---

# Slice

Regular slicing (on the form `lower:upper` or `lower:upper:step`).
Can occur only inside the *slice* field of `Subscript`, either
directly or as an element of `Tuple`.

```python

>>> print(ast.dump(ast.parse('l[1:2]', mode='eval'), indent=4))
Expression(
    body=Subscript(
        value=Name(id='l'),
        slice=Slice(
            lower=Constant(value=1),
            upper=Constant(value=2))))
```
