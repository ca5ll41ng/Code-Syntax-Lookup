---
id: "python-en-function-builtins-keyboardinterrupt"
language: "python"
lang: "en"
category: "function"
name: "KeyboardInterrupt"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#KeyboardInterrupt"
license: "PSF"
updated: "2026-10-01"
---

# KeyboardInterrupt

Raised when the user hits the interrupt key (normally `Control-C` or
`Delete`).  During execution, a check for interrupts is made
regularly. The exception inherits from `BaseException` so as to not be
accidentally caught by code that catches `Exception` and thus prevent
the interpreter from exiting.

> **Note**
>
> Catching a `KeyboardInterrupt` requires special consideration.
> Because it can be raised at unpredictable points, it may, in some
> circumstances, leave the running program in an inconsistent state. It is
> generally best to allow `KeyboardInterrupt` to end the program as
> quickly as possible or avoid raising it entirely. (See
> `handlers-and-exceptions`.)
>
