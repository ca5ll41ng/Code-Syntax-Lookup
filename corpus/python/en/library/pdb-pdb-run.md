---
id: "python-en-function-pdb-run"
language: "python"
lang: "en"
category: "function"
name: "run"
signature: "run(statement, globals=None, locals=None)"
directive: "function"
module: "pdb"
source_url: "https://docs.python.org/3/library/pdb.html#pdb.run"
license: "PSF"
updated: "2026-10-01"
---

# run

Execute the *statement* (given as a string or a code object) under debugger
control.  The debugger prompt appears before any code is executed; you can
set breakpoints and type `continue`, or you can step through the
statement using `step` or `next` (all these commands are
explained below).  The optional *globals* and *locals* arguments specify the
environment in which the code is executed; by default the dictionary of the
module `__main__` is used.  (See the explanation of the built-in
`exec` or `eval` functions.)
