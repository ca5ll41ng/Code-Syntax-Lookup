---
id: "python-en-function-ast-break"
language: "python"
lang: "en"
category: "function"
name: "Break"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Break"
license: "PSF"
updated: "2026-10-01"
---

# Break

The `break` and `continue` statements.

```python

>>> print(ast.dump(ast.parse("""\
... for a in b:
...     if a > 5:
...         break
...     else:
...         continue
...
... """), indent=4))
Module(
    body=[
        For(
            target=Name(id='a', ctx=Store()),
            iter=Name(id='b'),
            body=[
                If(
                    test=Compare(
                        left=Name(id='a'),
                        ops=[
                            Gt()],
                        comparators=[
                            Constant(value=5)]),
                    body=[
                        Break()],
                    orelse=[
                        Continue()])])])
```
