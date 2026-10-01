---
id: "python-en-function-contextvars-token"
language: "python"
lang: "en"
category: "function"
name: "Token"
directive: "class"
module: "contextvars"
source_url: "https://docs.python.org/3/library/contextvars.html#contextvars.Token"
license: "PSF"
updated: "2026-10-01"
---

# Token

*Token* objects are returned by the `ContextVar.set` method.
They can be passed to the `ContextVar.reset` method to revert
the value of the variable to what it was before the corresponding
*set*. A single token cannot reset a context variable more than once.

Tokens support the `context manager protocol`
to automatically reset context variables. See `ContextVar.set`.

Tokens are `generic` over the same type as the
`ContextVar` which created them.

> *Added in 3.14*: Added support for usage as a context manager.

attribute:: Token.var

attribute:: Token.old_value

attribute:: Token.MISSING
