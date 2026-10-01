---
id: "python-en-function-threading-timer"
language: "python"
lang: "en"
category: "function"
name: "Timer"
signature: "Timer(interval, function, args=None, kwargs=None)"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.Timer"
license: "PSF"
updated: "2026-10-01"
---

# Timer

Create a timer that will run *function* with arguments *args* and  keyword
arguments *kwargs*, after *interval* seconds have passed.
If *args* is `None` (the default) then an empty list will be used.
If *kwargs* is `None` (the default) then an empty dict will be used.

> *Changed in 3.3*: changed from a factory function to a class.

method:: cancel()
