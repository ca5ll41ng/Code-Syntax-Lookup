---
id: "python-en-function-ast-annassign"
language: "python"
lang: "en"
category: "function"
name: "AnnAssign"
signature: "AnnAssign(target, annotation, value, simple)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.AnnAssign"
license: "PSF"
updated: "2026-10-01"
---

# AnnAssign

An assignment with a type annotation. `target` is a single node and can
be a `Name`, an `Attribute` or a `Subscript`.
`annotation` is the annotation, such as a `Constant` or `Name`
node. `value` is a single optional node.

`simple` is always either 0 (indicating a "complex" target) or 1
(indicating a "simple" target). A "simple" target consists solely of a
`Name` node that does not appear between parentheses; all other
targets are considered complex. Only simple targets appear in
the `~object.__annotations__` dictionary of modules and classes.

```python

>>> print(ast.dump(ast.parse('c: int'), indent=4))
Module(
    body=[
        AnnAssign(
            target=Name(id='c', ctx=Store()),
            annotation=Name(id='int'),
            simple=1)])

>>> print(ast.dump(ast.parse('(a): int = 1'), indent=4)) # Annotation with parenthesis
Module(
    body=[
        AnnAssign(
            target=Name(id='a', ctx=Store()),
            annotation=Name(id='int'),
            value=Constant(value=1),
            simple=0)])

>>> print(ast.dump(ast.parse('a.b: int'), indent=4)) # Attribute annotation
Module(
    body=[
        AnnAssign(
            target=Attribute(
                value=Name(id='a'),
                attr='b',
                ctx=Store()),
            annotation=Name(id='int'),
            simple=0)])

>>> print(ast.dump(ast.parse('a[1]: int'), indent=4)) # Subscript annotation
Module(
    body=[
        AnnAssign(
            target=Subscript(
                value=Name(id='a'),
                slice=Constant(value=1),
                ctx=Store()),
            annotation=Name(id='int'),
            simple=0)])
```
