---
id: "python-en-function-asyncio-exceptions-cancellederror"
language: "python"
lang: "en"
category: "function"
name: "CancelledError"
directive: "exception"
module: "asyncio-exceptions"
source_url: "https://docs.python.org/3/library/asyncio-exceptions.html#asyncio-exceptions.CancelledError"
license: "PSF"
updated: "2026-10-01"
---

# CancelledError

The operation has been cancelled.

This exception can be caught to perform custom operations
when asyncio Tasks are cancelled.  In almost all situations the
exception must be re-raised.

> *Changed in 3.8*: :exc:`CancelledError` is now a subclass of :class:`BaseException` rather than :class:`Exception`.
