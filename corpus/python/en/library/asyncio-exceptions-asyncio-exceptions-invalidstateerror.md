---
id: "python-en-function-asyncio-exceptions-invalidstateerror"
language: "python"
lang: "en"
category: "function"
name: "InvalidStateError"
directive: "exception"
module: "asyncio-exceptions"
source_url: "https://docs.python.org/3/library/asyncio-exceptions.html#asyncio-exceptions.InvalidStateError"
license: "PSF"
updated: "2026-10-01"
---

# InvalidStateError

Invalid internal state of `Task` or `Future`.

Can be raised in situations like setting a result value for a
*Future* object that already has a result value set.
