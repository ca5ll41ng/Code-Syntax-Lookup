---
id: "python-en-function-ast-matchclass"
language: "python"
lang: "en"
category: "function"
name: "MatchClass"
signature: "MatchClass(cls, patterns, kwd_attrs, kwd_patterns)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.MatchClass"
license: "PSF"
updated: "2026-10-01"
---

# MatchClass

A match class pattern. `cls` is an expression giving the nominal class to
be matched. `patterns` is a sequence of pattern nodes to be matched against
the class defined sequence of pattern matching attributes. `kwd_attrs` is a
sequence of additional attributes to be matched (specified as keyword arguments
in the class pattern), `kwd_patterns` are the corresponding patterns
(specified as keyword values in the class pattern).

This pattern succeeds if the subject is an instance of the nominated class,
all positional patterns match the corresponding class-defined attributes, and
any specified keyword attributes match their corresponding pattern.

Note: classes may define a property that returns self in order to match a
pattern node against the instance being matched. Several builtin types are
also matched that way, as described in the match statement documentation.

```python

>>> print(ast.dump(ast.parse("""
... match x:
...     case Point2D(0, 0):
...         ...
...     case Point3D(x=0, y=0, z=0):
...         ...
... """), indent=4))
Module(
    body=[
        Match(
            subject=Name(id='x'),
            cases=[
                match_case(
                    pattern=MatchClass(
                        cls=Name(id='Point2D'),
                        patterns=[
                            MatchValue(
                                value=Constant(value=0)),
                            MatchValue(
                                value=Constant(value=0))]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))]),
                match_case(
                    pattern=MatchClass(
                        cls=Name(id='Point3D'),
                        kwd_attrs=[
                            'x',
                            'y',
                            'z'],
                        kwd_patterns=[
                            MatchValue(
                                value=Constant(value=0)),
                            MatchValue(
                                value=Constant(value=0)),
                            MatchValue(
                                value=Constant(value=0))]),
                    body=[
                        Expr(
                            value=Constant(value=Ellipsis))])])])
```

> *Added in 3.10*
