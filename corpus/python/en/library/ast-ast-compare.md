---
id: "python-en-function-ast-compare"
language: "python"
lang: "en"
category: "function"
name: "Compare"
signature: "Compare(left, ops, comparators)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Compare"
license: "PSF"
updated: "2026-10-01"
---

# Compare

A comparison of two or more values. `left` is the first value in the
comparison, `ops` the list of operators, and `comparators` the list
of values after the first element in the comparison.

```python

>>> print(ast.dump(ast.parse('1 <= a < 10', mode='eval'), indent=4))
Expression(
    body=Compare(
        left=Constant(value=1),
        ops=[
            LtE(),
            Lt()],
        comparators=[
            Name(id='a'),
            Constant(value=10)]))
```
