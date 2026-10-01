---
id: "python-en-function-ast-delete"
language: "python"
lang: "en"
category: "function"
name: "Delete"
signature: "Delete(targets)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Delete"
license: "PSF"
updated: "2026-10-01"
---

# Delete

Represents a `del` statement. `targets` is a list of nodes, such as
`Name`, `Attribute` or `Subscript` nodes.

```python

>>> print(ast.dump(ast.parse('del x,y,z'), indent=4))
Module(
    body=[
        Delete(
            targets=[
                Name(id='x', ctx=Del()),
                Name(id='y', ctx=Del()),
                Name(id='z', ctx=Del())])])
```
