---
id: "python-en-function-typing-never"
language: "python"
lang: "en"
category: "function"
name: "Never"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Never"
license: "PSF"
updated: "2026-10-01"
---

# Never

`Never` and `NoReturn` represent the
[bottom type](https://en.wikipedia.org/wiki/Bottom_type),
a type that has no members.

They can be used to indicate that a function never returns,
such as `sys.exit`::

   from typing import Never  # or NoReturn

   def stop() -> Never:
       raise RuntimeError('no way')

Or to define a function that should never be
called, as there are no valid arguments, such as
`assert_never`::

   from typing import Never  # or NoReturn

   def never_call_me(arg: Never) -> None:
       pass

   def int_or_str(arg: int | str) -> None:
       never_call_me(arg)  # type checker error
       match arg:
           case int():
               print("It's an int")
           case str():
               print("It's a str")
           case _:
               never_call_me(arg)  # OK, arg is of type Never (or NoReturn)

`Never` and `NoReturn` have the same meaning in the type system
and static type checkers treat both equivalently.

> *Added in 3.6.2*: Added :data:`NoReturn`.

> *Added in 3.11*: Added :data:`Never`.
