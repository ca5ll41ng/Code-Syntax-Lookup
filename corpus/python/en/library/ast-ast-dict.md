---
id: "python-en-function-ast-dict"
language: "python"
lang: "en"
category: "function"
name: "Dict"
signature: "Dict(keys, values)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Dict"
license: "PSF"
updated: "2026-10-01"
---

# Dict

A dictionary. `keys` and `values` hold lists of nodes representing the
keys and the values respectively, in matching order (what would be returned
when calling `dictionary.keys()` and `dictionary.values()`).

When doing dictionary unpacking using dictionary literals the expression to be
expanded goes in the `values` list, with a `None` at the corresponding
position in `keys`.

```python

>>> print(ast.dump(ast.parse('{"a":1, **d}', mode='eval'), indent=4))
Expression(
    body=Dict(
        keys=[
            Constant(value='a'),
            None],
        values=[
            Constant(value=1),
            Name(id='d')]))
```
