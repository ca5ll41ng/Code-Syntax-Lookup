---
id: "python-zh-function-ast-nonlocal"
language: "python"
lang: "zh"
category: "function"
name: "Nonlocal"
signature: "Nonlocal(names)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.Nonlocal"
license: "PSF"
updated: "2026-10-01"
---

# Nonlocal

``global`` 和 ``nonlocal`` 语句。``names`` 为一个由原始字符串组成的列表。

```python

>>> print(ast.dump(ast.parse('global x,y,z'), indent=4))
Module(
    body=[
        Global(
            names=[
                'x',
                'y',
                'z'])])

>>> print(ast.dump(ast.parse('nonlocal x,y,z'), indent=4))
Module(
    body=[
        Nonlocal(
            names=[
                'x',
                'y',
                'z'])])
```
