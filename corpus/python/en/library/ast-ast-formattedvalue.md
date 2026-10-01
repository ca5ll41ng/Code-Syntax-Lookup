---
id: "python-en-function-ast-formattedvalue"
language: "python"
lang: "en"
category: "function"
name: "FormattedValue"
signature: "FormattedValue(value, conversion, format_spec)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.FormattedValue"
license: "PSF"
updated: "2026-10-01"
---

# FormattedValue

Node representing a single formatting field in an f-string. If the string
contains a single formatting field and nothing else the node can be
isolated otherwise it appears in `JoinedStr`.

* `value` is any expression node (such as a literal, a variable, or a
  function call).
* `conversion` is an integer:

  * -1: no formatting
  * 97 (`ord('a')`): `!a` `ASCII` formatting
  * 114 (`ord('r')`): `!r` `repr` formatting
  * 115 (`ord('s')`): `!s` `string` formatting

* `format_spec` is a `JoinedStr` node representing the formatting
  of the value, or `None` if no format was specified. Both
  `conversion` and `format_spec` can be set at the same time.
