---
id: "python-en-function-ast-import"
language: "python"
lang: "en"
category: "function"
name: "Import"
signature: "Import(names)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Import"
license: "PSF"
updated: "2026-10-01"
---

# Import

An import statement. `names` is a list of `alias` nodes.

```python

>>> print(ast.dump(ast.parse('import x,y,z'), indent=4))
Module(
    body=[
        Import(
            names=[
                alias(name='x'),
                alias(name='y'),
                alias(name='z')],
            is_lazy=0)])
```
