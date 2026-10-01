---
id: "python-en-function-contextvars-contextvar"
language: "python"
lang: "en"
category: "function"
name: "ContextVar"
signature: "ContextVar(name, [*, default])"
directive: "class"
module: "contextvars"
source_url: "https://docs.python.org/3/library/contextvars.html#contextvars.ContextVar"
license: "PSF"
updated: "2026-10-01"
---

# ContextVar

This class is used to declare a new Context Variable, e.g.::

    var: ContextVar[int] = ContextVar('var', default=42)

The required *name* parameter is used for introspection and debug
purposes.

The optional keyword-only *default* parameter is returned by
`ContextVar.get` when no value for the variable is found
in the current context.

**Important:** Context Variables should be created at the top module
level and never in closures.  `Context` objects hold strong
references to context variables which prevents context variables
from being properly garbage collected.

`ContextVar`\s are `generic` over the type of
their contained value.

attribute:: ContextVar.name

method:: get([default])

method:: set(value)

method:: reset(token)
