---
id: "python-en-function-ast-assert"
language: "python"
lang: "en"
category: "function"
name: "Assert"
signature: "Assert(test, msg)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.Assert"
license: "PSF"
updated: "2026-10-01"
---

# Assert

An assertion. `test` holds the condition, such as a `Compare` node.
`msg` holds the failure message.

```python

>>> print(ast.dump(ast.parse('assert x,y'), indent=4))
Module(
    body=[
        Assert(
            test=Name(id='x'),
            msg=Name(id='y'))])
```
