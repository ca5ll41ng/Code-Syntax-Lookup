---
id: "python-en-function-ast-matchstar"
language: "python"
lang: "en"
category: "function"
name: "MatchStar"
signature: "MatchStar(name)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchStar"
license: "PSF"
updated: "2026-10-01"
---

# MatchStar

Matches the rest of the sequence in a variable length match sequence pattern.
If `name` is not `None`, a list containing the remaining sequence
elements is bound to that name if the overall sequence pattern is successful.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case [1, 2, *rest]:
...         ...
...     case [*_]:
...         ...
... """), indent=4))
Module(
    body=[
        Match(
            subject=Name(id='x'),
            cases=[
                match_case(
                    pattern=MatchSequence(
                        patterns=[
                            MatchValue(
                                value=Constant(value=1)),
                            MatchValue(
                                value=Constant(value=2)),
                            MatchStar(name='rest')]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))]),
                match_case(
                    pattern=MatchSequence(
                        patterns=[
                            MatchStar()]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
