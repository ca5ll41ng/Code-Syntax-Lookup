---
id: "python-zh-function-ast-return"
language: "python"
lang: "zh"
category: "function"
name: "Return"
signature: "Return(value)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.Return"
license: "PSF"
updated: "2026-10-01"
---

# Return

一条 ``return`` 语句。

```python

>>> print(ast.dump(ast.parse('return 4'), indent=4))
Module(
    body=[
        Return(
            value=Constant(value=4))])
```
