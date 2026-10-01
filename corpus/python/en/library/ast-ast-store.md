---
id: "python-en-function-ast-store"
language: "python"
lang: "en"
category: "function"
name: "Store"
signature: "Store()"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Store"
license: "PSF"
updated: "2026-10-01"
---

# Store

Variable references can be used to load the value of a variable, to assign
a new value to it, or to delete it. Variable references are given a context
to distinguish these cases.

```python

>>> print(ast.dump(ast.parse('a'), indent=4))
Module(
    body=[
        Expr(
            value=Name(id='a'))])

>>> print(ast.dump(ast.parse('a = 1'), indent=4))
Module(
    body=[
        Assign(
            targets=[
                Name(id='a', ctx=Store())],
            value=Constant(value=1))])

>>> print(ast.dump(ast.parse('del a'), indent=4))
Module(
    body=[
        Delete(
            targets=[
                Name(id='a', ctx=Del())])])
```
