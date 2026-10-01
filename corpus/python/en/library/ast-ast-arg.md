---
id: "python-en-function-ast-arg"
language: "python"
lang: "en"
category: "function"
name: "arg"
signature: "arg(arg, annotation, type_comment)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.arg"
license: "PSF"
updated: "2026-10-01"
---

# arg

A single argument in a list. `arg` is a raw string of the argument
name; `annotation` is its annotation, such as a `Name` node.

attribute:: type_comment

```python

>>> print(ast.dump(ast.parse("""\
... @decorator1
... @decorator2
... def f(a: 'annotation', b=1, c=2, *d, e, f=3, **g) -> 'return annotation':
...     pass
... """), indent=4))
Module(
    body=[
        FunctionDef(
            name='f',
            args=arguments(
                args=[
                    arg(
                        arg='a',
                        annotation=Constant(value='annotation')),
                    arg(arg='b'),
                    arg(arg='c')],
                vararg=arg(arg='d'),
                kwonlyargs=[
                    arg(arg='e'),
                    arg(arg='f')],
                kw_defaults=[
                    None,
                    Constant(value=3)],
                kwarg=arg(arg='g'),
                defaults=[
                    Constant(value=1),
                    Constant(value=2)]),
            body=[
                Pass()],
            decorator_list=[
                Name(id='decorator1'),
                Name(id='decorator2')],
            returns=Constant(value='return annotation'))])
```
