---
id: "python-zh-function-inspect-getclosurevars"
language: "python"
lang: "zh"
category: "function"
name: "getclosurevars"
signature: "getclosurevars(func)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.getclosurevars"
license: "PSF"
updated: "2026-10-01"
---

# getclosurevars

Get the mapping of external name references in a Python function or
method *func* to their current values. A
`named tuple` `ClosureVars(nonlocals, globals, builtins, unbound)`
is returned. *nonlocals* maps referenced names to lexical closure
variables, *globals* to the function's module globals and *builtins* to
the builtins visible from the function body. *unbound* is the set of names
referenced in the function that could not be resolved at all given the
current module globals and builtins.

如果 *func* 不是 Python 函数或方法，将引发 :exc:`TypeError`。

> *Added in 3.3*
