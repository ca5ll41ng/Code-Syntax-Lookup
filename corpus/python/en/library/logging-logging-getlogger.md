---
id: "python-en-function-logging-getlogger"
language: "python"
lang: "en"
category: "function"
name: "getLogger"
signature: "getLogger(name=None)"
directive: "function"
module: "logging"
source_url: "https://docs.python.org/3/library/logging.html#logging.getLogger"
license: "PSF"
updated: "2026-10-01"
---

# getLogger

Return a logger with the specified name or, if name is `None`, return the
root logger of the hierarchy. If specified, the name is typically a
dot-separated hierarchical name like *'a'*, *'a.b'* or *'a.b.c.d'*. Choice
of these names is entirely up to the developer who is using logging, though
it is recommended that `__name__` be used unless you have a specific
reason for not doing that, as mentioned in `logger`.

All calls to this function with a given name return the same logger instance.
This means that logger instances never need to be passed between different parts
of an application.
