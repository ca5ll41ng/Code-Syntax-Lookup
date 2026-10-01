---
id: "python-en-function-ast-joinedstr"
language: "python"
lang: "en"
category: "function"
name: "JoinedStr"
signature: "JoinedStr(values)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.JoinedStr"
license: "PSF"
updated: "2026-10-01"
---

# JoinedStr

An f-string, comprising a series of `FormattedValue` and `Constant`
nodes.

```python

>>> print(ast.dump(ast.parse('f"sin({a}) is {sin(a):.3}"', mode='eval'), indent=4))
Expression(
    body=JoinedStr(
        values=[
            Constant(value='sin('),
            FormattedValue(
                value=Name(id='a'),
                conversion=-1),
            Constant(value=') is '),
            FormattedValue(
                value=Call(
                    func=Name(id='sin'),
                    args=[
                        Name(id='a')]),
                conversion=-1,
                format_spec=JoinedStr(
                    values=[
                        Constant(value='.3')]))]))
```
