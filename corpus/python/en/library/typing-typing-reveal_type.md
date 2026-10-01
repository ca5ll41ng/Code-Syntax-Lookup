---
id: "python-en-function-typing-reveal_type"
language: "python"
lang: "en"
category: "function"
name: "reveal_type"
signature: "reveal_type(obj, /)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.reveal_type"
license: "PSF"
updated: "2026-10-01"
---

# reveal_type

Ask a static type checker to reveal the inferred type of an expression.

When a static type checker encounters a call to this function,
it emits a diagnostic with the inferred type of the argument. For example::

   x: int = 1
   reveal_type(x)  # Revealed type is "builtins.int"

This can be useful when you want to debug how your type checker
handles a particular piece of code.

At runtime, this function prints the runtime type of its argument to
`sys.stderr` and returns the argument unchanged (allowing the call to
be used within an expression)::

   x = reveal_type(1)  # prints "Runtime type is int"
   print(x)  # prints "1"

Note that the runtime type may be different from (more or less specific
than) the type statically inferred by a type checker.

Most type checkers support `reveal_type()` anywhere, even if the
name is not imported from `typing`. Importing the name from
`typing`, however, allows your code to run without runtime errors and
communicates intent more clearly.

> *Added in 3.11*
