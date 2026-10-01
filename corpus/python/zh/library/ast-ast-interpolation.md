---
id: "python-zh-function-ast-interpolation"
language: "python"
lang: "zh"
category: "function"
name: "Interpolation"
signature: "Interpolation(value, str, conversion, format_spec=None)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.Interpolation"
license: "PSF"
updated: "2026-10-01"
---

# Interpolation

> *Added in 3.14*

节点表示模板字符串字面值中单个插值字段。

* `value` is any expression node (such as a literal, a variable, or a
  function call).
  This has the same meaning as `FormattedValue.value`.
* `str` is a constant containing the text of the interpolation expression.

  If `str` is set to `None`, then `value` is used to generate code
  when calling `ast.unparse`. This no longer guarantees that the
  generated code is identical to the original and is intended for code
  generation.
* `conversion` is an integer:

  * -1: no conversion
  * 97 (`ord('a')`): `!a` `ASCII` conversion
  * 114 (`ord('r')`): `!r` `repr` conversion
  * 115 (`ord('s')`): `!s` `string` conversion

  This has the same meaning as `FormattedValue.conversion`.
* `format_spec` is a `JoinedStr` node representing the formatting
  of the value, or `None` if no format was specified. Both
  `conversion` and `format_spec` can be set at the same time.
  This has the same meaning as `FormattedValue.format_spec`.
