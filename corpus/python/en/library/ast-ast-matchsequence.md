---
id: "python-en-function-ast-matchsequence"
language: "python"
lang: "en"
category: "function"
name: "MatchSequence"
signature: "MatchSequence(patterns)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchSequence"
license: "PSF"
updated: "2026-10-01"
---

# MatchSequence

A match sequence pattern. `patterns` contains the patterns to be matched
against the subject elements if the subject is a sequence. Matches a variable
length sequence if one of the subpatterns is a `MatchStar` node, otherwise
matches a fixed length sequence.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case [1, 2]:
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
                                value=Constant(value=2))]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
