---
id: "python-zh-function-ast-assign"
language: "python"
lang: "zh"
category: "function"
name: "Assign"
signature: "Assign(targets, value, type_comment)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.Assign"
license: "PSF"
updated: "2026-10-01"
---

# Assign

一次赋值。``targets`` 是一个由节点组成的列表，而 ``value`` 是一个单独节点。

Multiple nodes in `targets` represents assigning the same value to each.
Unpacking is represented by putting a `Tuple` or `List`
within `targets`.

attribute:: type_comment

```python

>>> print(ast.dump(ast.parse('a = b = 1'), indent=4)) # Multiple assignment
Module(
    body=[
        Assign(
            targets=[
                Name(id='a', ctx=Store()),
                Name(id='b', ctx=Store())],
            value=Constant(value=1))])

>>> print(ast.dump(ast.parse('a,b = c'), indent=4)) # Unpacking
Module(
    body=[
        Assign(
            targets=[
                Tuple(
                    elts=[
                        Name(id='a', ctx=Store()),
                        Name(id='b', ctx=Store())],
                    ctx=Store())],
            value=Name(id='c'))])
```
