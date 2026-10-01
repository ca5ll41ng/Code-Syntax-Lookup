---
id: "python-zh-function-ast-pass"
language: "python"
lang: "zh"
category: "function"
name: "Pass"
signature: "Pass()"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.Pass"
license: "PSF"
updated: "2026-10-01"
---

# Pass

一条 ``pass`` 语句。

```python

>>> print(ast.dump(ast.parse('pass'), indent=4))
Module(
    body=[
        Pass()])
```
