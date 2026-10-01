---
id: "python-zh-function-ast-import"
language: "python"
lang: "zh"
category: "function"
name: "Import"
signature: "Import(names)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.Import"
license: "PSF"
updated: "2026-10-01"
---

# Import

一条导入语句。``names`` 是一个由 :class:`alias` 节点组成的列表。

```python

>>> print(ast.dump(ast.parse('import x,y,z'), indent=4))
Module(
    body=[
        Import(
            names=[
                alias(name='x'),
                alias(name='y'),
                alias(name='z')],
            is_lazy=0)])
```
