---
id: "python-en-function-ast-templatestr"
language: "python"
lang: "en"
category: "function"
name: "TemplateStr"
signature: "TemplateStr(values, /)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.TemplateStr"
license: "PSF"
updated: "2026-10-01"
---

# TemplateStr

> *Added in 3.14*

Node representing a template string literal, comprising a series of
`Interpolation` and `Constant` nodes.
These nodes may be any order, and do not need to be interleaved.

```python

>>> expr = ast.parse('t"{name} finished {place:ordinal}"', mode='eval')
>>> print(ast.dump(expr, indent=4))
Expression(
    body=TemplateStr(
        values=[
            Interpolation(
                value=Name(id='name'),
                str='name',
                conversion=-1),
            Constant(value=' finished '),
            Interpolation(
                value=Name(id='place'),
                str='place',
                conversion=-1,
                format_spec=JoinedStr(
                    values=[
                        Constant(value='ordinal')]))]))
```
