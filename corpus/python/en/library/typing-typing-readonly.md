---
id: "python-en-function-typing-readonly"
language: "python"
lang: "en"
category: "function"
name: "ReadOnly"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.ReadOnly"
license: "PSF"
updated: "2026-10-01"
---

# ReadOnly

A special typing construct to mark an item of a `TypedDict` as read-only.

For example::

   class Movie(TypedDict):
      title: ReadOnly[str]
      year: int

   def mutate_movie(m: Movie) -> None:
      m["year"] = 1999  # allowed
      m["title"] = "The Matrix"  # type checker error

There is no runtime checking for this property.

See `TypedDict` and PEP 705 for more details.

> *Added in 3.13*
