---
id: "python-en-function-pickletools-genops"
language: "python"
lang: "en"
category: "function"
name: "genops"
signature: "genops(pickle)"
directive: "function"
module: "pickletools"
source_url: "https://docs.python.org/3/library/pickletools.html#pickletools.genops"
license: "PSF"
updated: "2026-10-01"
---

# genops

Provides an `iterator` over all of the opcodes in a pickle, returning a
sequence of `(opcode, arg, pos)` triples.  *opcode* is an instance of an
`OpcodeInfo` class; *arg* is the decoded value, as a Python object, of
the opcode's argument; *pos* is the position at which this opcode is located.
*pickle* can be a string or a file-like object.
