---
id: "python-en-function-typing-type_checking"
language: "python"
lang: "en"
category: "function"
name: "TYPE_CHECKING"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.TYPE_CHECKING"
license: "PSF"
updated: "2026-10-01"
---

# TYPE_CHECKING

A special constant that is assumed to be `True` by static
type checkers. It's `False` at runtime.

A module which is expensive to import, and which only contain types
used for typing annotations, can be safely imported inside an
`if TYPE_CHECKING:` block.  This prevents the module from actually
being imported at runtime; annotations aren't eagerly evaluated
(see PEP 649) so using undefined symbols in annotations is
harmless--as long as you don't later examine them.
Your static type analysis tool will set `TYPE_CHECKING` to
`True` during static type analysis, which means the module will
be imported and the types will be checked properly during such analysis.

Usage::

   if TYPE_CHECKING:
       import expensive_mod

   def fun(arg: expensive_mod.SomeType) -> None:
       local_var: expensive_mod.AnotherType = other_fun()

If you occasionally need to examine type annotations at runtime
which may contain undefined symbols, use
`annotationlib.get_annotations` with a `format` parameter
of `annotationlib.Format.STRING` or
`annotationlib.Format.FORWARDREF` to safely retrieve the
annotations without raising `NameError`.

> *Added in 3.5.2*
