---
id: "python-en-function-ast-nodevisitor"
language: "python"
lang: "en"
category: "function"
name: "NodeVisitor"
signature: "NodeVisitor()"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.NodeVisitor"
license: "PSF"
updated: "2026-10-01"
---

# NodeVisitor

A node visitor base class that walks the abstract syntax tree and calls a
visitor function for every node found.  This function may return a value
which is forwarded by the `visit` method.

This class is meant to be subclassed, with the subclass adding visitor
methods.

method:: visit(node)

method:: generic_visit(node)

method:: visit_Constant(node)

Don't use the `NodeVisitor` if you want to apply changes to nodes
during traversal.  For this a special visitor exists
(`NodeTransformer`) that allows modifications.

deprecated-removed:: 3.8 3.14
