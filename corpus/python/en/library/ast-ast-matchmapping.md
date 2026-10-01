---
id: "python-en-function-ast-matchmapping"
language: "python"
lang: "en"
category: "function"
name: "MatchMapping"
signature: "MatchMapping(keys, patterns, rest)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchMapping"
license: "PSF"
updated: "2026-10-01"
---

# MatchMapping

A match mapping pattern. `keys` is a sequence of expression nodes.
`patterns` is a corresponding sequence of pattern nodes. `rest` is an
optional name that can be specified to capture the remaining mapping elements.
Permitted key expressions are restricted as described in the match statement
documentation.

This pattern succeeds if the subject is a mapping, all evaluated key
expressions are present in the mapping, and the value corresponding to each
key matches the corresponding subpattern. If `rest` is not `None`, a dict
containing the remaining mapping elements is bound to that name if the overall
mapping pattern is successful.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case {1: _, 2: _}:
...         ...
...     case {**rest}:
...         ...
... """), indent=4))
Module(
    body=[
        Match(
            subject=Name(id='x'),
            cases=[
                match_case(
                    pattern=MatchMapping(
                        keys=[
                            Constant(value=1),
                            Constant(value=2)],
                        patterns=[
                            MatchAs(),
                            MatchAs()]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))]),
                match_case(
                    pattern=MatchMapping(rest='rest'),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
