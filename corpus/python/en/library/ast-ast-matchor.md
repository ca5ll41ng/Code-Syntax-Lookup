---
id: "python-en-function-ast-matchor"
language: "python"
lang: "en"
category: "function"
name: "MatchOr"
signature: "MatchOr(patterns)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchOr"
license: "PSF"
updated: "2026-10-01"
---

# MatchOr

A match "or-pattern". An or-pattern matches each of its subpatterns in turn
to the subject, until one succeeds. The or-pattern is then deemed to
succeed. If none of the subpatterns succeed the or-pattern fails. The
`patterns` attribute contains a list of match pattern nodes that will be
matched against the subject.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case [x] | (y):
...         ...
... """), indent=4))
Module(
    body=[
        Match(
            subject=Name(id='x'),
            cases=[
                match_case(
                    pattern=MatchOr(
                        patterns=[
                            MatchSequence(
                                patterns=[
                                    MatchAs(name='x')]),
                            MatchAs(name='y')]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
