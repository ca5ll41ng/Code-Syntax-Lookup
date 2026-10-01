---
id: "python-en-function-ast-dump"
language: "python"
lang: "en"
category: "function"
name: "dump"
signature: "dump(node, annotate_fields=True, include_attributes=False, *, color=False, indent=None, show_empty=False)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.dump"
license: "PSF"
updated: "2026-10-01"
---

# dump

Return a formatted dump of the tree in *node*.  This is mainly useful for
debugging purposes.  If *annotate_fields* is true (by default),
the returned string will show the names and the values for fields.
If *annotate_fields* is false, the result string will be more compact by
omitting unambiguous field names.  Attributes such as line
numbers and column offsets are not dumped by default.  If this is wanted,
*include_attributes* can be set to true.

If *color* is `True`, the returned string is syntax highlighted using
ANSI escape sequences.
If `False` (the default), colored output is always disabled.

If *indent* is a non-negative integer or string, then the tree will be
pretty-printed with that indent level.  An indent level
of 0, negative, or `""` will only insert newlines.  `None` (the default)
selects the single line representation. Using a positive integer indent
indents that many spaces per level.  If *indent* is a string (such as `"\t"`),
that string is used to indent each level.

If *show_empty* is false (the default), optional empty lists and
`Load()` values will be omitted from the output.
Optional `None` values are always omitted.

```python

>>> tree = ast.parse('print(None)', '?', 'eval')
>>> print(ast.dump(tree, indent=4))
Expression(
    body=Call(
        func=Name(id='print'),
        args=[
            Constant(value=None)]))
>>> print(ast.dump(tree, indent=4, show_empty=True))
Expression(
    body=Call(
        func=Name(id='print', ctx=Load()),
        args=[
            Constant(value=None)],
        keywords=[]))
```

> *Changed in 3.9*: Added the *indent* option.

> *Changed in 3.13*: Added the *show_empty* option.

> *Changed in 3.15*: Omit optional ``Load()`` values by default.

> *Changed in 3.15*: Added the *color* parameter.
