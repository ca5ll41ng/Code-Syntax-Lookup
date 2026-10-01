---
id: "python-en-function-ast-typeignore"
language: "python"
lang: "en"
category: "function"
name: "TypeIgnore"
signature: "TypeIgnore(lineno, tag)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.TypeIgnore"
license: "PSF"
updated: "2026-10-01"
---

# TypeIgnore

A `# type: ignore` comment located at *lineno*.
*tag* is the optional tag specified by the form `# type: ignore <tag>`.

```python

>>> print(ast.dump(ast.parse('x = 1 # type: ignore', type_comments=True), indent=4))
Module(
    body=[
        Assign(
            targets=[
                Name(id='x', ctx=Store())],
            value=Constant(value=1))],
    type_ignores=[
        TypeIgnore(lineno=1, tag='')])
>>> print(ast.dump(ast.parse('x: bool = 1 # type: ignore[assignment]', type_comments=True), indent=4))
Module(
    body=[
        AnnAssign(
            target=Name(id='x', ctx=Store()),
            annotation=Name(id='bool'),
            value=Constant(value=1),
            simple=1)],
    type_ignores=[
        TypeIgnore(lineno=1, tag='[assignment]')])
```

> **Note**
>
> `TypeIgnore` nodes are not generated when the *type_comments* parameter
> is set to `False` (default).  See `ast.parse` for more details.
>

> *Added in 3.8*
