---
id: "python-en-function-typing-self"
language: "python"
lang: "en"
category: "function"
name: "Self"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Self"
license: "PSF"
updated: "2026-10-01"
---

# Self

Special type to represent the current enclosed class.

For example::

   from typing import Self, reveal_type

   class Foo:
       def return_self(self) -> Self:
           ...
           return self

   class SubclassOfFoo(Foo): pass

   reveal_type(Foo().return_self())  # Revealed type is "Foo"
   reveal_type(SubclassOfFoo().return_self())  # Revealed type is "SubclassOfFoo"

This annotation is semantically equivalent to the following,
albeit in a more succinct fashion::

   from typing import TypeVar

   Self = TypeVar("Self", bound="Foo")

   class Foo:
       def return_self(self: Self) -> Self:
           ...
           return self

In general, if something returns `self`, as in the above examples, you
should use `Self` as the return annotation. If `Foo.return_self` was
annotated as returning `"Foo"`, then the type checker would infer the
object returned from `SubclassOfFoo.return_self` as being of type `Foo`
rather than `SubclassOfFoo`.

Other common use cases include:

- `classmethod`\s that are used as alternative constructors and return instances
  of the `cls` parameter.
- Annotating an `~object.__enter__` method which returns self.

You should not use `Self` as the return annotation if the method is not
guaranteed to return an instance of a subclass when the class is
subclassed::

   class Eggs:
       # Self would be an incorrect return annotation here,
       # as the object returned is always an instance of Eggs,
       # even in subclasses
       def returns_eggs(self) -> "Eggs":
           return Eggs()

See PEP 673 for more details.

> *Added in 3.11*
