---
id: "python-en-function-dis-show_caches-false-adaptive-false-show_offsets-false"
language: "python"
lang: "en"
category: "function"
name: "show_caches=False, adaptive=False, show_offsets=False,\\"
directive: "class"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.show_caches=False, adaptive=False, show_offsets=False,\\"
license: "PSF"
updated: "2026-10-01"
---

# show_caches=False, adaptive=False, show_offsets=False,\

Analyse the bytecode corresponding to a function, generator, asynchronous
generator, coroutine, method, string of source code, or a code object (as
returned by `compile`).

This is a convenience wrapper around many of the functions listed below, most
notably `get_instructions`, as iterating over a `Bytecode`
instance yields the bytecode operations as `Instruction` instances.

If *first_line* is not `None`, it indicates the line number that should be
reported for the first source line in the disassembled code.  Otherwise, the
source line information (if any) is taken directly from the disassembled code
object.

If *current_offset* is not `None`, it refers to an instruction offset in the
disassembled code. Setting this means `.dis` will display a "current
instruction" marker against the specified opcode.

If *show_caches* is `True`, `.dis` will display inline cache
entries used by the interpreter to specialize the bytecode.

If *adaptive* is `True`, `.dis` will display specialized bytecode
that may be different from the original bytecode.

If *show_offsets* is `True`, `.dis` will include instruction
offsets in the output.

If *show_positions* is `True`, `.dis` will include instruction
source code positions in the output.

If *show_jit* is `True`, `.dis` will show `ENTER_EXECUTOR`
instructions, which mark JIT entry points and are hidden by default.

classmethod:: from_traceback(tb, *, show_caches=False)

data:: codeobj

data:: first_line

method:: dis()

method:: info()

> *Changed in 3.7*: This can now handle coroutine and asynchronous generator objects.

> *Changed in 3.11*: Added the *show_caches* and *adaptive* parameters.

> *Changed in 3.13*: Added the *show_offsets* parameter

> *Changed in 3.14*: Added the *show_positions* parameter.

> *Changed in next*: Added the *show_jit* parameter.
