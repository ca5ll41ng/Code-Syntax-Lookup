---
id: "python-en-function-ast-constant"
language: "python"
lang: "en"
category: "function"
name: "Constant"
signature: "Constant(value, kind)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Constant"
license: "PSF"
updated: "2026-10-01"
---

# Constant

A constant value. The `value` attribute of the `Constant` literal contains the
Python object it represents. The values represented can be instances of `str`,
`bytes`, `int`, `float`, `complex`, and `bool`,
and the constants `None` and `Ellipsis`.

The `kind` attribute is an optional string. For string literals with a
`u` prefix, `kind` is set to `'u'`. For all other
constants, `kind` is `None`.

```python

>>> print(ast.dump(ast.parse('123', mode='eval'), indent=4))
Expression(
    body=Constant(value=123))
>>> print(ast.dump(ast.parse("u'hello'", mode='eval'), indent=4))
Expression(
    body=Constant(value='hello', kind='u'))
```
