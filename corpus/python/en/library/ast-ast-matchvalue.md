---
id: "python-en-function-ast-matchvalue"
language: "python"
lang: "en"
category: "function"
name: "MatchValue"
signature: "MatchValue(value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchValue"
license: "PSF"
updated: "2026-10-01"
---

# MatchValue

A match literal or value pattern that compares by equality. `value` is
an expression node. Permitted value nodes are restricted as described in
the match statement documentation. This pattern succeeds if the match
subject is equal to the evaluated value.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case "Relevant":
...         ...
... """), indent=4))
Module(
    body=[
        Match(
            subject=Name(id='x'),
            cases=[
                match_case(
                    pattern=MatchValue(
                        value=Constant(value='Relevant')),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
