---
id: "python-en-function-ast-assign"
language: "python"
lang: "en"
category: "function"
name: "Assign"
signature: "Assign(targets, value, type_comment)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Assign"
license: "PSF"
updated: "2026-10-01"
---

# Assign

An assignment. `targets` is a list of nodes, and `value` is a single node.

Multiple nodes in `targets` represents assigning the same value to each.
Unpacking is represented by putting a `Tuple` or `List`
within `targets`.

attribute:: type_comment

```python

>>> print(ast.dump(ast.parse('a = b = 1'), indent=4)) # Multiple assignment
Module(
    body=[
        Assign(
            targets=[
                Name(id='a', ctx=Store()),
                Name(id='b', ctx=Store())],
            value=Constant(value=1))])

>>> print(ast.dump(ast.parse('a,b = c'), indent=4)) # Unpacking
Module(
    body=[
        Assign(
            targets=[
                Tuple(
                    elts=[
                        Name(id='a', ctx=Store()),
                        Name(id='b', ctx=Store())],
                    ctx=Store())],
            value=Name(id='c'))])
```
