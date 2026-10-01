---
id: "python-en-function-ast-get_source_segment"
language: "python"
lang: "en"
category: "function"
name: "get_source_segment"
signature: "get_source_segment(source, node, *, padded=False)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.get_source_segment"
license: "PSF"
updated: "2026-10-01"
---

# get_source_segment

Get source code segment of the *source* that generated *node*.
If some location information (`~ast.AST.lineno`, `~ast.AST.end_lineno`,
`~ast.AST.col_offset`, or `~ast.AST.end_col_offset`) is missing, return `None`.

If *padded* is `True`, the first line of a multi-line statement will
be padded with spaces to match its original position.

> *Added in 3.8*
