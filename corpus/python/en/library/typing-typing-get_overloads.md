---
id: "python-en-function-typing-get_overloads"
language: "python"
lang: "en"
category: "function"
name: "get_overloads"
signature: "get_overloads(func)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.get_overloads"
license: "PSF"
updated: "2026-10-01"
---

# get_overloads

Return a sequence of `overload`-decorated definitions for
*func*.

*func* is the function object for the implementation of the
overloaded function. For example, given the definition of `process` in
the documentation for `overload`,
`get_overloads(process)` will return a sequence of three function objects
for the three defined overloads. If called on a function with no overloads,
`get_overloads()` returns an empty sequence.

`get_overloads()` can be used for introspecting an overloaded function at
runtime.

> *Added in 3.11*
