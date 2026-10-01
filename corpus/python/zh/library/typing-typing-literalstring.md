---
id: "python-zh-function-typing-literalstring"
language: "python"
lang: "zh"
category: "function"
name: "LiteralString"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.LiteralString"
license: "PSF"
updated: "2026-10-01"
---

# LiteralString

只包括字符串字面值的特殊类型。

Any string
literal is compatible with `LiteralString`, as is another
`LiteralString`. However, an object typed as just `str` is not.
A string created by composing `LiteralString`-typed objects
is also acceptable as a `LiteralString`.

示例:

```python

def run_query(sql: LiteralString) -> None:
    ...

def caller(arbitrary_string: str, literal_string: LiteralString) -> None:
    run_query("SELECT * FROM students")  # OK
    run_query(literal_string)  # OK
    run_query("SELECT * FROM " + literal_string)  # OK
    run_query(arbitrary_string)  # type checker error
    run_query(  # type checker error
        f"SELECT * FROM students WHERE name = {arbitrary_string}"
    )
```

`LiteralString` is useful for sensitive APIs where arbitrary user-generated
strings could generate problems. For example, the two cases above
that generate type checker errors could be vulnerable to an SQL
injection attack.

请参阅 :pep:`675` 了解详情。

> *Added in 3.11*
