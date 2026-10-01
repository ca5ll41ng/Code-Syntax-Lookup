---
id: "python-en-function-builtins-vars"
language: "python"
lang: "en"
category: "function"
name: "vars"
signature: "vars()"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#vars"
license: "PSF"
updated: "2026-10-01"
---

# vars

Return the `~object.__dict__` attribute for a module, class, instance,
or any other object with a `__dict__` attribute.

Objects such as modules and instances have an updateable `~object.__dict__`
attribute; however, other objects may have write restrictions on their
`__dict__` attributes (for example, classes use a
`types.MappingProxyType` to prevent direct dictionary updates).

Without an argument, `vars` acts like `locals`.

A `TypeError` exception is raised if an object is specified but
it doesn't have a `~object.__dict__` attribute (for example, if
its class defines the `~object.__slots__` attribute).

> *Changed in 3.13*: The result of calling this function without an argument has been updated as described for the :func:`locals` builtin.
