---
id: "python-en-function-threading-event"
language: "python"
lang: "en"
category: "function"
name: "Event"
signature: "Event()"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.Event"
license: "PSF"
updated: "2026-10-01"
---

# Event

Class implementing event objects.  An event manages a flag that can be set to
true with the `~Event.set` method and reset to false with the
`clear` method.  The `wait` method blocks until the flag is true.
The flag is initially false.

> *Changed in 3.3*: changed from a factory function to a class.

method:: is_set()

method:: set()

method:: clear()

method:: wait(timeout=None)
