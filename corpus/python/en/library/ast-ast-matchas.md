---
id: "python-en-function-ast-matchas"
language: "python"
lang: "en"
category: "function"
name: "MatchAs"
signature: "MatchAs(pattern, name)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchAs"
license: "PSF"
updated: "2026-10-01"
---

# MatchAs

A match "as-pattern", capture pattern or wildcard pattern. `pattern`
contains the match pattern that the subject will be matched against.
If the pattern is `None`, the node represents a capture pattern (i.e a
bare name) and will always succeed.

The `name` attribute contains the name that will be bound if the pattern
is successful. If `name` is `None`, `pattern` must also be `None`
and the node represents the wildcard pattern.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case [x] as y:
...         ...
...     case _:
...         ...
... """), indent=4))
Module(
    body=[
        Match(
            subject=Name(id='x'),
            cases=[
                match_case(
                    pattern=MatchAs(
                        pattern=MatchSequence(
                            patterns=[
                                MatchAs(name='x')]),
                        name='y'),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))]),
                match_case(
                    pattern=MatchAs(),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
