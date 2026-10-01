---
id: "python-en-function-ast-classdef"
language: "python"
lang: "en"
category: "function"
name: "ClassDef"
signature: "ClassDef(name, bases, keywords, body, decorator_list, type_params)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.ClassDef"
license: "PSF"
updated: "2026-10-01"
---

# ClassDef

A class definition.

* `name` is a raw string for the class name
* `bases` is a list of nodes for explicitly specified base classes.
* `keywords` is a list of `.keyword` nodes, principally for 'metaclass'.
  Other keywords will be passed to the metaclass, as per PEP 3115.
* `body` is a list of nodes representing the code within the class
  definition.
* `decorator_list` is a list of nodes, as in `FunctionDef`.
* `type_params` is a list of `type parameters`.

```python

>>> print(ast.dump(ast.parse("""\
... @decorator1
... @decorator2
... class Foo(base1, base2, metaclass=meta):
...     pass
... """), indent=4))
Module(
    body=[
        ClassDef(
            name='Foo',
            bases=[
                Name(id='base1'),
                Name(id='base2')],
            keywords=[
                keyword(
                    arg='metaclass',
                    value=Name(id='meta'))],
            body=[
                Pass()],
            decorator_list=[
                Name(id='decorator1'),
                Name(id='decorator2')])])
```

> *Changed in 3.12*: Added ``type_params``.
