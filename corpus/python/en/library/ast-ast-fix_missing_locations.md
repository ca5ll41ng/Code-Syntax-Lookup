---
id: "python-en-function-ast-fix_missing_locations"
language: "python"
lang: "en"
category: "function"
name: "fix_missing_locations"
signature: "fix_missing_locations(node)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.fix_missing_locations"
license: "PSF"
updated: "2026-10-01"
---

# fix_missing_locations

When you compile a node tree with `compile`, the compiler expects
`~ast.AST.lineno` and `~ast.AST.col_offset` attributes for every node that supports
them.  This is rather tedious to fill in for generated nodes, so this helper
adds these attributes recursively where not already set, by setting them to
the values of the parent node.  It works recursively starting at *node*.
