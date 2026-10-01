---
id: "python-en-function-ast-nonlocal"
language: "python"
lang: "en"
category: "function"
name: "Nonlocal"
signature: "Nonlocal(names)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Nonlocal"
license: "PSF"
updated: "2026-10-01"
---

# Nonlocal

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
