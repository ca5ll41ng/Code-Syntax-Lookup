---
id: "python-en-function-sys-ps1"
language: "python"
lang: "en"
category: "function"
name: "ps1"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.ps1"
license: "PSF"
updated: "2026-10-01"
---

# ps1

Strings specifying the primary and secondary prompt of the interpreter.  These
are only defined if the interpreter is in interactive mode.  Their initial
values in this case are `'>>> '` and `'... '`.  If a non-string object is
assigned to either variable, its `str` is re-evaluated each time the
interpreter prepares to read a new interactive command; this can be used to
implement a dynamic prompt.
