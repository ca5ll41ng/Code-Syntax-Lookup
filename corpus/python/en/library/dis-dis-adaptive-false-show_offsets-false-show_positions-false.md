---
id: "python-en-function-dis-adaptive-false-show_offsets-false-show_positions-false"
language: "python"
lang: "en"
category: "function"
name: "adaptive=False, show_offsets=False, show_positions=False,\\"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/3/library/dis.html#dis.adaptive=False, show_offsets=False, show_positions=False,\\"
license: "PSF"
updated: "2026-10-01"
---

# adaptive=False, show_offsets=False, show_positions=False,\

Disassemble the *x* object.  *x* can denote either a module, a class, a
method, a function, a generator, an asynchronous generator, a coroutine,
a code object, a string of source code or a byte sequence of raw bytecode.
For a module, it disassembles all functions. For a class, it disassembles
all methods (including class and static methods). For a code object or
sequence of raw bytecode, it prints one line per bytecode instruction.
It also recursively disassembles nested code objects. These can include
generator expressions, nested functions, the bodies of nested classes,
and the code objects used for `annotation scopes`.
Strings are first compiled to code objects with the `compile`
built-in function before being disassembled.  If no object is provided, this
function disassembles the last traceback.

The disassembly is written as text to the supplied *file* argument if
provided and to `sys.stdout` otherwise.

The maximal depth of recursion is limited by *depth* unless it is `None`.
`depth=0` means no recursion.

If *show_caches* is `True`, this function will display inline cache
entries used by the interpreter to specialize the bytecode.

If *adaptive* is `True`, this function will display specialized bytecode
that may be different from the original bytecode.

If *show_jit* is `True`, this function will show `ENTER_EXECUTOR`
instructions, which mark JIT entry points and are hidden by default.

> *Changed in 3.4*: Added *file* parameter.

> *Changed in 3.7*: Implemented recursive disassembling and added *depth* parameter.

> *Changed in 3.7*: This can now handle coroutine and asynchronous generator objects.

> *Changed in 3.11*: Added the *show_caches* and *adaptive* parameters.

> *Changed in 3.13*: Added the *show_offsets* parameter.

> *Changed in 3.14*: Added the *show_positions* parameter.

> *Changed in next*: Added the *show_jit* parameter.
