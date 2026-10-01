---
id: "python-en-function-ast-get_docstring"
language: "python"
lang: "en"
category: "function"
name: "get_docstring"
signature: "get_docstring(node, clean=True)"
directive: "function"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.get_docstring"
license: "PSF"
updated: "2026-10-01"
---

# get_docstring

Return the docstring of the given *node* (which must be a
`FunctionDef`, `AsyncFunctionDef`, `ClassDef`,
or `Module` node), or `None` if it has no docstring.
If *clean* is true, clean up the docstring's indentation with
`inspect.cleandoc`.

> *Changed in 3.5*: :class:`AsyncFunctionDef` is now supported.
