---
id: "python-en-function-ast-typealias"
language: "python"
lang: "en"
category: "function"
name: "TypeAlias"
signature: "TypeAlias(name, type_params, value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.TypeAlias"
license: "PSF"
updated: "2026-10-01"
---

# TypeAlias

A `type alias` created through the `type`
statement. `name` is the name of the alias, `type_params` is a list of
`type parameters`, and `value` is the value of the
type alias.

```python

>>> print(ast.dump(ast.parse('type Alias = int'), indent=4))
Module(
    body=[
        TypeAlias(
            name=Name(id='Alias', ctx=Store()),
            value=Name(id='int'))])
```

> *Added in 3.12*
