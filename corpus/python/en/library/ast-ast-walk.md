---
id: "python-en-function-ast-walk"
language: "python"
lang: "en"
category: "function"
name: "walk"
signature: "walk(node)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.walk"
license: "PSF"
updated: "2026-10-01"
---

# walk

Recursively yield all descendant nodes in the tree starting at *node*
(including *node* itself), in no specified order.  This is useful if you only
want to modify nodes in place and don't care about the context.
