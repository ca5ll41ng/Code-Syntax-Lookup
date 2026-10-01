---
id: "python-en-function-typing-annotated"
language: "python"
lang: "en"
category: "function"
name: "Annotated"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Annotated"
license: "PSF"
updated: "2026-10-01"
---

# Annotated

Special typing form to add context-specific metadata to an annotation.

Add metadata `x` to a given type `T` by using the annotation
`Annotated[T, x]`. Metadata added using `Annotated` can be used by
static analysis tools or at runtime. At runtime, the metadata is stored
in a `__metadata__` attribute.

If a library or tool encounters an annotation `Annotated[T, x]` and has
no special logic for the metadata, it should ignore the metadata and simply
treat the annotation as `T`. As such, `Annotated` can be useful for code
that wants to use annotations for purposes outside Python's static typing
system.

Using `Annotated[T, x]` as an annotation still allows for static
typechecking of `T`, as type checkers will simply ignore the metadata `x`.
In this way, `Annotated` differs from the
`no_type_check` decorator, which can also be used for
adding annotations outside the scope of the typing system, but
completely disables typechecking for a function or class.

The responsibility of how to interpret the metadata
lies with the tool or library encountering an
`Annotated` annotation. A tool or library encountering an `Annotated` type
can scan through the metadata elements to determine if they are of interest
(e.g., using `isinstance`).

describe:: Annotated[<type>, <metadata>]

Here is an example of how you might use `Annotated` to add metadata to
type annotations if you were doing range analysis:

```python

@dataclass
class ValueRange:
    lo: int
    hi: int

T1 = Annotated[int, ValueRange(-10, 5)]
T2 = Annotated[T1, ValueRange(-20, 3)]
```

The first argument to `Annotated` must be a valid type. Multiple metadata
elements can be supplied as `Annotated` supports variadic arguments. The
order of the metadata elements is preserved and matters for equality checks::

   @dataclass
   class ctype:
        kind: str

   a1 = Annotated[int, ValueRange(3, 10), ctype("char")]
   a2 = Annotated[int, ctype("char"), ValueRange(3, 10)]

   assert a1 != a2  # Order matters

It is up to the tool consuming the annotations to decide whether the
client is allowed to add multiple metadata elements to one annotation and how to
merge those annotations.

Nested `Annotated` types are flattened. The order of the metadata elements
starts with the innermost annotation::

   assert Annotated[Annotated[int, ValueRange(3, 10)], ctype("char")] == Annotated[
       int, ValueRange(3, 10), ctype("char")
   ]

However, this does not apply to `Annotated` types referenced through a type
alias, to avoid forcing evaluation of the underlying `TypeAliasType`::

   type From3To10[T] = Annotated[T, ValueRange(3, 10)]
   assert Annotated[From3To10[int], ctype("char")] != Annotated[
      int, ValueRange(3, 10), ctype("char")
   ]

Duplicated metadata elements are not removed::

   assert Annotated[int, ValueRange(3, 10)] != Annotated[
       int, ValueRange(3, 10), ValueRange(3, 10)
   ]

`Annotated` can be used with nested and generic aliases:

```python

@dataclass
class MaxLen:
    value: int

type Vec[T] = Annotated[list[tuple[T, T]], MaxLen(10)]

# When used in a type annotation, a type checker will treat "V" the same as
# ``Annotated[list[tuple[int, int]], MaxLen(10)]``:
type V = Vec[int]
```

`Annotated` cannot be used with an unpacked `TypeVarTuple`::

     type Variadic[*Ts] = Annotated[*Ts, Ann1] = Annotated[T1, T2, T3, ..., Ann1]  # NOT valid

where `T1`, `T2`, ... are `TypeVars`. This is invalid as
only one type should be passed to Annotated.

By default, `get_type_hints` strips the metadata from annotations.
Pass `include_extras=True` to have the metadata preserved:

```python

>>> from typing import Annotated, get_type_hints
>>> def func(x: Annotated[int, "metadata"]) -> None: pass
...
>>> get_type_hints(func)
{'x': <class 'int'>, 'return': <class 'NoneType'>}
>>> get_type_hints(func, include_extras=True)
{'x': typing.Annotated[int, 'metadata'], 'return': <class 'NoneType'>}
```

At runtime, the metadata associated with an `Annotated` type can be
retrieved via the `__metadata__` attribute:

```python

>>> from typing import Annotated
>>> X = Annotated[int, "very", "important", "metadata"]
>>> X
typing.Annotated[int, 'very', 'important', 'metadata']
>>> X.__metadata__
('very', 'important', 'metadata')
```

If you want to retrieve the original type wrapped by `Annotated`, use the
`__origin__` attribute:

```python

>>> from typing import Annotated, get_origin
>>> Password = Annotated[str, "secret"]
>>> Password.__origin__
<class 'str'>
```

Note that using `get_origin` will return `Annotated` itself:

```python

>>> get_origin(Password)
typing.Annotated
```

> **Seealso**
>
> PEP 593 - Flexible function and variable annotations
>    The PEP introducing `Annotated` to the standard library.
>

> *Added in 3.9*
