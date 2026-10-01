---
id: "python-en-function-ast-copy_location"
language: "python"
lang: "en"
category: "function"
name: "copy_location"
signature: "copy_location(new_node, old_node)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.copy_location"
license: "PSF"
updated: "2026-10-01"
---

# copy_location

Copy source location (`~ast.AST.lineno`, `~ast.AST.col_offset`, `~ast.AST.end_lineno`,
and `~ast.AST.end_col_offset`) from *old_node* to *new_node* if possible,
and return *new_node*.
