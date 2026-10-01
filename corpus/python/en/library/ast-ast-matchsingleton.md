---
id: "python-en-function-ast-matchsingleton"
language: "python"
lang: "en"
category: "function"
name: "MatchSingleton"
signature: "MatchSingleton(value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchSingleton"
license: "PSF"
updated: "2026-10-01"
---

# MatchSingleton

A match literal pattern that compares by identity. `value` is the
singleton to be compared against: `None`, `True`, or `False`. This
pattern succeeds if the match subject is the given constant.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case None:
...         ...
... """), indent=4))
Module(
    body=[
        Match(
            subject=Name(id='x'),
            cases=[
                match_case(
                    pattern=MatchSingleton(value=None),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
