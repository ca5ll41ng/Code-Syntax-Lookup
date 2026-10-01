---
id: "python-en-function-ast-starred"
language: "python"
lang: "en"
category: "function"
name: "Starred"
signature: "Starred(value, ctx)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Starred"
license: "PSF"
updated: "2026-10-01"
---

# Starred

A `*var` variable reference. `value` holds the variable, typically a
`Name` node. This type must be used when building a `Call`
node with `*args`.

```python

>>> print(ast.dump(ast.parse('a, *b = it'), indent=4))
Module(
    body=[
        Assign(
            targets=[
                Tuple(
                    elts=[
                        Name(id='a', ctx=Store()),
                        Starred(
                            value=Name(id='b', ctx=Store()),
                            ctx=Store())],
                    ctx=Store())],
            value=Name(id='it'))])
```
