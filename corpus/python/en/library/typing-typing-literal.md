---
id: "python-en-function-typing-literal"
language: "python"
lang: "en"
category: "function"
name: "Literal"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Literal"
license: "PSF"
updated: "2026-10-01"
---

# Literal

Special typing form to define "literal types".

`Literal` can be used to indicate to type checkers that the
annotated object has a value equivalent to one of the
provided literals.

For example::

   def validate_simple(data: Any) -> Literal[True]:  # always returns True
       ...

   type Mode = Literal['r', 'rb', 'w', 'wb']
   def open_helper(file: str, mode: Mode) -> str:
       ...

   open_helper('/some/path', 'r')      # Passes type check
   open_helper('/other/path', 'typo')  # Error in type checker

`Literal[...]` cannot be subclassed. At runtime, an arbitrary value
is allowed as type argument to `Literal[...]`, but type checkers may
impose restrictions. See PEP 586 for more details about literal types.

Additional details:

* The arguments must be literal values and there must be at least one.

* Nested `Literal` types are flattened, e.g.::

   assert Literal[Literal[1, 2], 3] == Literal[1, 2, 3]

  However, this does not apply to `Literal` types referenced through a type
  alias, to avoid forcing evaluation of the underlying `TypeAliasType`::

   type A = Literal[1, 2]
   assert Literal[A, 3] != Literal[1, 2, 3]

* Redundant arguments are skipped, e.g.::

   assert Literal[1, 2, 1] == Literal[1, 2]

* When comparing literals, the argument order is ignored, e.g.::

   assert Literal[1, 2] == Literal[2, 1]

* You cannot subclass or instantiate a `Literal`.

* You cannot write `Literal[X][Y]`.

> *Added in 3.8*

> *Changed in 3.9.1*: ``Literal`` now de-duplicates parameters.  Equality comparisons of ``Literal`` objects are no longer order dependent. ``Literal`` objects will now raise a :exc:`TypeError` exception during equality comparisons if one of their parameters are not :term:`hashable`.
