---
id: "python-en-function-ast-arguments"
language: "python"
lang: "en"
category: "function"
name: "arguments"
signature: "arguments(posonlyargs, args, vararg, kwonlyargs, kw_defaults, kwarg, defaults)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/3/library/ast.html#ast.arguments"
license: "PSF"
updated: "2026-10-01"
---

# arguments

The arguments for a function.

* `posonlyargs`, `args` and `kwonlyargs` are lists of `arg` nodes.
* `vararg` and `kwarg` are single `arg` nodes, referring to the
  `*args, **kwargs` parameters.
* `kw_defaults` is a list of default values for keyword-only arguments. If
  one is `None`, the corresponding argument is required.
* `defaults` is a list of default values for arguments that can be passed
  positionally. If there are fewer defaults, they correspond to the last n
  arguments.
