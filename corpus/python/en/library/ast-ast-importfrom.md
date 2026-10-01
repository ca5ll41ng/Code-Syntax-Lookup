---
id: "python-en-function-ast-importfrom"
language: "python"
lang: "en"
category: "function"
name: "ImportFrom"
signature: "ImportFrom(module, names, level)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.ImportFrom"
license: "PSF"
updated: "2026-10-01"
---

# ImportFrom

Represents `from x import y`. `module` is a raw string of the 'from' name,
without any leading dots, or `None` for statements such as `from . import foo`.
`level` is an integer holding the level of the relative import (0 means
absolute import).

```python

>>> print(ast.dump(ast.parse('from y import x,y,z'), indent=4))
Module(
    body=[
        ImportFrom(
            module='y',
            names=[
                alias(name='x'),
                alias(name='y'),
                alias(name='z')],
            level=0,
            is_lazy=0)])
```
