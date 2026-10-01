---
id: "python-en-function-selectors-baseselector"
language: "python"
lang: "en"
category: "function"
name: "BaseSelector"
directive: "class"
module: "selectors"
source_url: "https://docs.python.org/3/library/selectors.html#selectors.BaseSelector"
license: "PSF"
updated: "2026-10-01"
---

# BaseSelector

A `BaseSelector` is used to wait for I/O event readiness on multiple
file objects. It supports file stream registration, unregistration, and a
method to wait for I/O events on those streams, with an optional timeout.
It's an abstract base class, so cannot be instantiated. Use
`DefaultSelector` instead, or one of `SelectSelector`,
`KqueueSelector` etc. if you want to specifically use an
implementation, and your platform supports it.
`BaseSelector` and its concrete implementations support the
`context manager` protocol.

method:: register(fileobj, events, data=None)

method:: unregister(fileobj)

method:: modify(fileobj, events, data=None)

method:: select(timeout=None)

method:: close()

method:: get_key(fileobj)

method:: get_map()
