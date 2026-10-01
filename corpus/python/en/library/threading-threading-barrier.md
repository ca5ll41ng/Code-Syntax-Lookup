---
id: "python-en-function-threading-barrier"
language: "python"
lang: "en"
category: "function"
name: "Barrier"
signature: "Barrier(parties, action=None, timeout=None)"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.Barrier"
license: "PSF"
updated: "2026-10-01"
---

# Barrier

Create a barrier object for *parties* number of threads.  An *action*, when
provided, is a callable to be called by one of the threads when they are
released.  *timeout* is the default timeout value if none is specified for
the `wait` method.

method:: wait(timeout=None)

method:: reset()

method:: abort()

attribute:: parties

attribute:: n_waiting

attribute:: broken
