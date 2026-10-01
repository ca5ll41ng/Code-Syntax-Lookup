---
id: "python-en-function-ast-typevartuple"
language: "python"
lang: "en"
category: "function"
name: "TypeVarTuple"
signature: "TypeVarTuple(name, default_value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.TypeVarTuple"
license: "PSF"
updated: "2026-10-01"
---

# TypeVarTuple

A `typing.TypeVarTuple`. `name` is the name of the type variable tuple.
`default_value` is the default value; if the `TypeVarTuple` has no
default, this attribute will be set to `None`.

```python

>>> print(ast.dump(ast.parse("type Alias[*Ts = ()] = tuple[*Ts]"), indent=4))
Module(
    body=[
        TypeAlias(
            name=Name(id='Alias', ctx=Store()),
            type_params=[
                TypeVarTuple(name='Ts', default_value=Tuple())],
            value=Subscript(
                value=Name(id='tuple'),
                slice=Tuple(
                    elts=[
                        Starred(
                            value=Name(id='Ts'))])))])
```

> *Added in 3.12*

> *Changed in 3.13*: Added the *default_value* parameter.
