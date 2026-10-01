---
id: "python-en-function-ast-alias"
language: "python"
lang: "en"
category: "function"
name: "alias"
signature: "alias(name, asname)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.alias"
license: "PSF"
updated: "2026-10-01"
---

# alias

Both parameters are raw strings of the names. `asname` can be `None` if
the regular name is to be used.

```python

>>> print(ast.dump(ast.parse('from ..foo.bar import a as b, c'), indent=4))
Module(
    body=[
        ImportFrom(
            module='foo.bar',
            names=[
                alias(name='a', asname='b'),
                alias(name='c')],
            level=2,
            is_lazy=0)])
```
