---
id: "python-en-function-dis-disco-code-lasti-1-file-none-show_caches-false-adaptive-false"
language: "python"
lang: "en"
category: "function"
name: "disco(code, lasti=-1, *, file=None, show_caches=False, adaptive=False,\\"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.disco(code, lasti=-1, *, file=None, show_caches=False, adaptive=False,\\"
license: "PSF"
updated: "2026-10-01"
---

# disco(code, lasti=-1, *, file=None, show_caches=False, adaptive=False,\

Disassemble a code object, indicating the last instruction if *lasti* was
provided.  The output is divided in the following columns:

#. the source code location of the instruction. Complete location information
   is shown if *show_positions* is true. Otherwise (the default) only the
   line number is displayed.
#. the current instruction, indicated as `-->`,
#. a labelled instruction, indicated with `>>`,
#. the address of the instruction,
#. the operation code name,
#. operation parameters, and
#. interpretation of the parameters in parentheses.

The parameter interpretation recognizes local and global variable names,
constant values, branch targets, and compare operators.

The disassembly is written as text to the supplied *file* argument if
provided and to `sys.stdout` otherwise.

> *Changed in 3.4*: Added *file* parameter.

> *Changed in 3.11*: Added the *show_caches* and *adaptive* parameters.

> *Changed in 3.13*: Added the *show_offsets* parameter.

> *Changed in 3.14*: Added the *show_positions* parameter.

> *Changed in next*: Added the *show_jit* parameter.
