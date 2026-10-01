---
id: "python-zh-function-ast-functiondef"
language: "python"
lang: "zh"
category: "function"
name: "FunctionDef"
signature: "FunctionDef(name, args, body, decorator_list, returns, type_comment, type_params)"
directive: "class"
module: "ast"
source_url: "https://docs.python.org/zh-cn/3/library/ast.html#ast.FunctionDef"
license: "PSF"
updated: "2026-10-01"
---

# FunctionDef

一个函数定义。

* `name` is a raw string of the function name.
* `args` is an `arguments` node.
* `body` is the list of nodes inside the function.
* `decorator_list` is the list of decorators to be applied, stored outermost
  first (i.e. the first in the list will be applied last).
* `returns` is the return annotation.
* `type_params` is a list of `type parameters`.

attribute:: type_comment

> *Changed in 3.12*: Added ``type_params``.
