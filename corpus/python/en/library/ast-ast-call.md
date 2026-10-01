---
id: "python-en-function-ast-call"
language: "python"
lang: "en"
category: "function"
name: "Call"
signature: "Call(func, args, keywords)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Call"
license: "PSF"
updated: "2026-10-01"
---

# Call

A function call. `func` is the function, which will often be a
`Name` or `Attribute` object. Of the arguments:

* `args` holds a list of the arguments passed by position.
* `keywords` holds a list of `.keyword` objects representing
  arguments passed by keyword.

The `args` and `keywords` arguments are optional and default to empty lists.

```python

>>> print(ast.dump(ast.parse('func(a, b=c, *d, **e)', mode='eval'), indent=4))
Expression(
    body=Call(
        func=Name(id='func'),
        args=[
            Name(id='a'),
            Starred(
                value=Name(id='d'))],
        keywords=[
            keyword(
                arg='b',
                value=Name(id='c')),
            keyword(
                value=Name(id='e'))]))
```
