---
id: "python-zh-function-typing-disjoint_base"
language: "python"
lang: "zh"
category: "function"
name: "disjoint_base"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.disjoint_base"
license: "PSF"
updated: "2026-10-01"
---

# disjoint_base

Decorator to mark a class as a disjoint base.

Type checkers do not allow child classes of a disjoint base `C` to
inherit from other disjoint bases that are not parent or child classes of `C`.

例如：

    @disjoint_base
    class Disjoint1: pass

    @disjoint_base
    class Disjoint2: pass

    class Disjoint3(Disjoint1, Disjoint2): pass  # Type checker error

Type checkers can use knowledge of disjoint bases to detect unreachable code
and determine when two types can overlap.

The corresponding runtime concept is a solid base (see `multiple-inheritance`).
Classes that are solid bases at runtime can be marked with `@disjoint_base` in stub files.
Users may also mark other classes as disjoint bases to indicate to type checkers that
multiple inheritance with other disjoint bases should not be allowed.

Note that the concept of a solid base is a CPython implementation
detail, and the exact set of standard library classes that are
disjoint bases at runtime may change in future versions of Python.

> *Added in 3.15*
