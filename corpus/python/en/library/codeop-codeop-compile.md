---
id: "python-en-function-codeop-compile"
language: "python"
lang: "en"
category: "function"
name: "Compile"
signature: "Compile()"
directive: "class"
module: "codeop"
source_url: "https://docs.python.org/3/library/codeop.html#codeop.Compile"
license: "PSF"
updated: "2026-10-01"
---

# Compile

Instances of this class have `~object.__call__` methods identical in signature to
the built-in function `compile`, but with the difference that if the
instance compiles program text containing a `__future__` statement, the
instance 'remembers' and compiles all subsequent program texts with the
statement in force.
