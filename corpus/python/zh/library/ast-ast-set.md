---
id: "python-zh-function-ast-set"
language: "python"
lang: "zh"
category: "function"
name: "Set"
signature: "Set(elts)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.Set"
license: "PSF"
updated: "2026-10-01"
---

# Set

一个集合。``elts`` 保存一个代表集合的元素的节点的列表。

```python

>>> print(ast.dump(ast.parse('{1, 2, 3}', mode='eval'), indent=4))
Expression(
    body=Set(
        elts=[
            Constant(value=1),
            Constant(value=2),
            Constant(value=3)]))
```
