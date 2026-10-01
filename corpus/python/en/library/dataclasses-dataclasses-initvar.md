---
id: "python-en-function-dataclasses-initvar"
language: "python"
lang: "en"
category: "function"
name: "InitVar"
directive: "class"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.InitVar"
license: "PSF"
updated: "2026-10-01"
---

# InitVar

`InitVar[T]` type annotations describe variables that are `init-only`. Fields annotated with `InitVar`
are considered pseudo-fields, and thus are neither returned by the
`fields` function nor used in any way except adding them as
parameters to `~object.__init__` and an optional
`__post_init__`.
