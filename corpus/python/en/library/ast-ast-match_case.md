---
id: "python-en-function-ast-match_case"
language: "python"
lang: "en"
category: "function"
name: "match_case"
signature: "match_case(pattern, guard, body)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.match_case"
license: "PSF"
updated: "2026-10-01"
---

# match_case

A single case pattern in a `match` statement. `pattern` contains the
match pattern that the subject will be matched against. Note that the
`AST` nodes produced for patterns differ from those produced for
expressions, even when they share the same syntax.

The `guard` attribute contains an expression that will be evaluated if
the pattern matches the subject.

`body` contains a list of nodes to execute if the pattern matches and
the result of evaluating the guard expression is true.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case [x] if x>0:
...         ...
...     case tuple():
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
                            MatchAs(name='x')]),
                    guard=Compare(
                        left=Name(id='x'),
                        ops=[
                            Gt()],
                        comparators=[
                            Constant(value=0)]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))]),
                match_case(
                    pattern=MatchClass(
                        cls=Name(id='tuple')),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
