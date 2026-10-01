---
id: "python-en-function-signal-itimererror"
language: "python"
lang: "en"
category: "function"
name: "ItimerError"
directive: "exception"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.ItimerError"
license: "PSF"
updated: "2026-10-01"
---

# ItimerError

Raised to signal an error from the underlying `setitimer` or
`getitimer` implementation. Expect this error if an invalid
interval timer or a negative time is passed to `setitimer`.
This error is a subtype of `OSError`.

> *Added in 3.3*: This error used to be a subtype of :exc:`IOError`, which is now an alias of :exc:`OSError`.
