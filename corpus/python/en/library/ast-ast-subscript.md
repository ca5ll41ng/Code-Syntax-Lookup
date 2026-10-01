---
id: "python-en-function-ast-subscript"
language: "python"
lang: "en"
category: "function"
name: "Subscript"
signature: "Subscript(value, slice, ctx)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Subscript"
license: "PSF"
updated: "2026-10-01"
---

# Subscript

A subscript, such as `l[1]`. `value` is the subscripted object
(usually sequence or mapping). `slice` is an index, slice or key.
It can be a `Tuple` and contain a `Slice`.
`ctx` is `Load`, `Store` or `Del`
according to the action performed with the subscript.

```python

>>> print(ast.dump(ast.parse('l[1:2, 3]', mode='eval'), indent=4))
Expression(
    body=Subscript(
        value=Name(id='l'),
        slice=Tuple(
            elts=[
                Slice(
                    lower=Constant(value=1),
                    upper=Constant(value=2)),
                Constant(value=3)])))
```
