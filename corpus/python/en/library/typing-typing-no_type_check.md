---
id: "python-en-function-typing-no_type_check"
language: "python"
lang: "en"
category: "function"
name: "no_type_check"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.no_type_check"
license: "PSF"
updated: "2026-10-01"
---

# no_type_check

Decorator to indicate that annotations are not type hints.

This works as a class or function `decorator`.  With a class, it
applies recursively to all methods and classes defined in that class
(but not to methods defined in its superclasses or subclasses). Type
checkers will ignore all annotations in a function or class with this
decorator.

`@no_type_check` mutates the decorated object in place.
