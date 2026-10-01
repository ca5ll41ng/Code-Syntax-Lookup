---
id: "python-en-function-ast-augassign"
language: "python"
lang: "en"
category: "function"
name: "AugAssign"
signature: "AugAssign(target, op, value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.AugAssign"
license: "PSF"
updated: "2026-10-01"
---

# AugAssign

Augmented assignment, such as `a += 1`. In the following example,
`target` is a `Name` node for `x` (with the `Store`
context), `op` is `Add`, and `value` is a `Constant` with
value for 1.

The `target` attribute cannot be of class `Tuple` or `List`,
unlike the targets of `Assign`.

```python

>>> print(ast.dump(ast.parse('x += 2'), indent=4))
Module(
    body=[
        AugAssign(
            target=Name(id='x', ctx=Store()),
            op=Add(),
            value=Constant(value=2))])
```
