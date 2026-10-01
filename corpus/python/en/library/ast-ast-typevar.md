---
id: "python-en-function-ast-typevar"
language: "python"
lang: "en"
category: "function"
name: "TypeVar"
signature: "TypeVar(name, bound, default_value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.TypeVar"
license: "PSF"
updated: "2026-10-01"
---

# TypeVar

A `typing.TypeVar`. `name` is the name of the type variable.
`bound` is the bound or constraints, if any. If `bound` is a `Tuple`,
it represents constraints; otherwise it represents the bound. `default_value`
is the default value; if the `TypeVar` has no default, this
attribute will be set to `None`.

```python

>>> print(ast.dump(ast.parse("type Alias[T: int = bool] = list[T]"), indent=4))
Module(
    body=[
        TypeAlias(
            name=Name(id='Alias', ctx=Store()),
            type_params=[
                TypeVar(
                    name='T',
                    bound=Name(id='int'),
                    default_value=Name(id='bool'))],
            value=Subscript(
                value=Name(id='list'),
                slice=Name(id='T')))])
```

> *Added in 3.12*

> *Changed in 3.13*: Added the *default_value* parameter.
