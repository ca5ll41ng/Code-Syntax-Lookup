---
id: "python-en-function-ast-global"
language: "python"
lang: "en"
category: "function"
name: "Global"
signature: "Global(names)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Global"
license: "PSF"
updated: "2026-10-01"
---

# Global

`global` and `nonlocal` statements. `names` is a list of raw strings.

```python

>>> print(ast.dump(ast.parse('global x,y,z'), indent=4))
Module(
    body=[
        Global(
            names=[
                'x',
                'y',
                'z'])])

>>> print(ast.dump(ast.parse('nonlocal x,y,z'), indent=4))
Module(
    body=[
        Nonlocal(
            names=[
                'x',
                'y',
                'z'])])
```
