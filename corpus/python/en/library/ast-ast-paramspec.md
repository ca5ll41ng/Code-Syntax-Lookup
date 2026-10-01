---
id: "python-en-function-ast-paramspec"
language: "python"
lang: "en"
category: "function"
name: "ParamSpec"
signature: "ParamSpec(name, default_value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.ParamSpec"
license: "PSF"
updated: "2026-10-01"
---

# ParamSpec

A `typing.ParamSpec`. `name` is the name of the parameter specification.
`default_value` is the default value; if the `ParamSpec` has no default,
this attribute will be set to `None`.

```python

>>> print(ast.dump(ast.parse("type Alias[**P = [int, str]] = Callable[P, int]"), indent=4))
Module(
    body=[
        TypeAlias(
            name=Name(id='Alias', ctx=Store()),
            type_params=[
                ParamSpec(
                    name='P',
                    default_value=List(
                        elts=[
                            Name(id='int'),
                            Name(id='str')]))],
            value=Subscript(
                value=Name(id='Callable'),
                slice=Tuple(
                    elts=[
                        Name(id='P'),
                        Name(id='int')])))])
```

> *Added in 3.12*

> *Changed in 3.13*: Added the *default_value* parameter.
