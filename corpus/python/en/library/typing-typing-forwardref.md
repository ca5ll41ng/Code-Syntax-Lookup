---
id: "python-en-function-typing-forwardref"
language: "python"
lang: "en"
category: "function"
name: "ForwardRef"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.ForwardRef"
license: "PSF"
updated: "2026-10-01"
---

# ForwardRef

Class used for internal typing representation of string forward references.

For example, `List["SomeClass"]` is implicitly transformed into
`List[ForwardRef("SomeClass")]`.  `ForwardRef` should not be instantiated by
a user, but may be used by introspection tools.

> **Note**
>
> PEP 585 generic types such as `list["SomeClass"]` will not be
> implicitly transformed into `list[ForwardRef("SomeClass")]` and thus
> will not automatically resolve to `list[SomeClass]`.
>

> *Added in 3.7.4*

> *Changed in 3.14*: This is now an alias for :class:`annotationlib.ForwardRef`. Several undocumented behaviors of this class have been changed; for example, after a ``ForwardRef`` has been evaluated, the evaluated value is no longer cached.
