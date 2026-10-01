---
id: "python-en-function-inspect-parameter"
language: "python"
lang: "en"
category: "function"
name: "Parameter"
signature: "Parameter(name, kind, *, default=Parameter.empty, annotation=Parameter.empty)"
directive: "class"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.Parameter"
license: "PSF"
updated: "2026-10-01"
---

# Parameter

`Parameter` objects are *immutable*.
Instead of modifying a `Parameter` object,
you can use `Parameter.replace` or `copy.replace` to create a modified copy.

> *Changed in 3.5*: Parameter objects are now picklable and :term:`hashable`.

attribute:: Parameter.empty

attribute:: Parameter.name

attribute:: Parameter.default

attribute:: Parameter.annotation

attribute:: Parameter.kind

attribute:: Parameter.kind.description

method:: Parameter.replace(*[, name][, kind][, default][, annotation])

> *Changed in 3.4*: In Python 3.3 :class:`Parameter` objects were allowed to have ``name`` set to ``None`` if their ``kind`` was set to ``POSITIONAL_ONLY``. This is no longer permitted.
