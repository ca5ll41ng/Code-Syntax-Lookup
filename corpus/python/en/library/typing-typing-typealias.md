---
id: "python-en-function-typing-typealias"
language: "python"
lang: "en"
category: "function"
name: "TypeAlias"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.TypeAlias"
license: "PSF"
updated: "2026-10-01"
---

# TypeAlias

Special annotation for explicitly declaring a `type alias`.

For example::

   from typing import TypeAlias

   Factors: TypeAlias = list[int]

`TypeAlias` is particularly useful on older Python versions for annotating
aliases that make use of forward references, as it can be hard for type
checkers to distinguish these from normal variable assignments:

```python

from typing import Generic, TypeAlias, TypeVar

T = TypeVar("T")

# "Box" does not exist yet,
# so we have to use quotes for the forward reference on Python <3.12.
# Using ``TypeAlias`` tells the type checker that this is a type alias declaration,
# not a variable assignment to a string.
BoxOfStrings: TypeAlias = "Box[str]"

class Box(Generic[T]):
    @classmethod
    def make_box_of_strings(cls) -> BoxOfStrings: ...
```

See PEP 613 for more details.

> *Added in 3.10*

> *Deprecated since 3.12*: :data:`TypeAlias` is deprecated in favor of the :keyword:`type` statement, which creates instances of :class:`TypeAliasType` and which natively supports forward references. Note that while :data:`TypeAlias` and :class:`TypeAliasType` serve similar purposes and have similar names, they are distinct and the latter is not the type of the former. Removal of :data:`TypeAlias` is not currently planned, but users are encouraged to migrate to :keyword:`type` statements.
