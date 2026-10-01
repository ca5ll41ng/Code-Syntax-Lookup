---
id: "python-en-function-codeop-commandcompiler"
language: "python"
lang: "en"
category: "function"
name: "CommandCompiler"
signature: "CommandCompiler()"
directive: "class"
module: "codeop"
source_url: "https://docs.python.org/3/library/codeop.html#codeop.CommandCompiler"
license: "PSF"
updated: "2026-10-01"
---

# CommandCompiler

Instances of this class have `~object.__call__` methods identical in signature to
`compile_command`; the difference is that if the instance compiles program
text containing a `__future__` statement, the instance 'remembers' and
compiles all subsequent program texts with the statement in force.
