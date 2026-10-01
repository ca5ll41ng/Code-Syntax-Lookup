---
id: "python-zh-function-ast-compare"
language: "python"
lang: "zh"
category: "function"
name: "compare"
signature: "compare(a, b, /, *, compare_attributes=False)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.compare"
license: "PSF"
updated: "2026-10-01"
---

# compare

递归地比较两个 AST。

*compare_attributes* affects whether AST attributes are considered
in the comparison. If *compare_attributes* is `False` (default), then
attributes are ignored. Otherwise they must all be equal. This
option is useful to check whether the ASTs are structurally equal but
differ in whitespace or similar details. Attributes include line numbers
and column offsets.

> *Added in 3.14*
