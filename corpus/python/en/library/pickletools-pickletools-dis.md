---
id: "python-en-function-pickletools-dis"
language: "python"
lang: "en"
category: "function"
name: "dis"
signature: "dis(pickle, out=None, memo=None, indentlevel=4, annotate=0)"
directive: "function"
module: "pickletools"
source_url: "https://docs.python.org/3/library/pickletools.html#pickletools.dis"
license: "PSF"
updated: "2026-10-01"
---

# dis

Outputs a symbolic disassembly of the pickle to the file-like
object *out*, defaulting to `sys.stdout`.  *pickle* can be a
string or a file-like object.  *memo* can be a Python dictionary
that will be used as the pickle's memo; it can be used to perform
disassemblies across multiple pickles created by the same
pickler. Successive levels, indicated by `MARK` opcodes in the
stream, are indented by *indentlevel* spaces.  If a nonzero value
is given to *annotate*, each opcode in the output is annotated with
a short description.  The value of *annotate* is used as a hint for
the column where annotation should start.

> *Changed in 3.2*: Added the *annotate* parameter.
