---
id: "python-zh-function-types-get_original_bases"
language: "python"
lang: "zh"
category: "function"
name: "get_original_bases"
signature: "get_original_bases(cls, /)"
directive: "function"
module: "types"
source_url: "https://docs.python.org/zh-cn/3/library/types.html#types.get_original_bases"
license: "PSF"
updated: "2026-10-01"
---

# get_original_bases

Return the tuple of objects originally given as the bases of *cls* before
the `~object.__mro_entries__` method has been called on any bases
(following the mechanisms laid out in PEP 560). This is useful for
introspecting `Generics`.

For classes that have an `__orig_bases__` attribute, this
function returns the value of `cls.__orig_bases__`.
For classes without the `__orig_bases__` attribute,
`cls.__bases__` is returned.

示例::

    from typing import TypeVar, Generic, NamedTuple, TypedDict

    T = TypeVar("T")
    class Foo(Generic[T]): ...
    class Bar(Foo[int], float): ...
    class Baz(list[str]): ...
    Eggs = NamedTuple("Eggs", [("a", int), ("b", str)])
    Spam = TypedDict("Spam", {"a": int, "b": str})

    assert Bar.__bases__ == (Foo, float)
    assert get_original_bases(Bar) == (Foo[int], float)

    assert Baz.__bases__ == (list,)
    assert get_original_bases(Baz) == (list[str],)

    assert Eggs.__bases__ == (tuple,)
    assert get_original_bases(Eggs) == (NamedTuple,)

    assert Spam.__bases__ == (dict,)
    assert get_original_bases(Spam) == (TypedDict,)

    assert int.__bases__ == (object,)
    assert get_original_bases(int) == (object,)

> *Added in 3.12*
