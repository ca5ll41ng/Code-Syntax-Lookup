---
id: "python-en-function-ast-unparse"
language: "python"
lang: "en"
category: "function"
name: "unparse"
signature: "unparse(ast_obj)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.unparse"
license: "PSF"
updated: "2026-10-01"
---

# unparse

Unparse an `ast.AST` object and generate a string with code
that would produce an equivalent `ast.AST` object if parsed
back with `ast.parse`.

> **Warning**
>
> The produced code string will not necessarily be equal to the original
> code that generated the `ast.AST` object (without any compiler
> optimizations, such as constant tuples/frozensets).
>

> **Warning**
>
> Trying to unparse a highly complex expression would result with
> `RecursionError`.
>

> *Added in 3.9*
