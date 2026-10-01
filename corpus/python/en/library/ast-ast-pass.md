---
id: "python-en-function-ast-pass"
language: "python"
lang: "en"
category: "function"
name: "Pass"
signature: "Pass()"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Pass"
license: "PSF"
updated: "2026-10-01"
---

# Pass

A `pass` statement.

```python

>>> print(ast.dump(ast.parse('pass'), indent=4))
Module(
    body=[
        Pass()])
```
