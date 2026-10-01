---
id: "python-en-function-builtins-generatorexit"
language: "python"
lang: "en"
category: "function"
name: "GeneratorExit"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#GeneratorExit"
license: "PSF"
updated: "2026-10-01"
---

# GeneratorExit

Raised when a `generator` or `coroutine` is closed;
see `generator.close` and `coroutine.close`.  It
directly inherits from `BaseException` instead of `Exception` since
it is technically not an error.
