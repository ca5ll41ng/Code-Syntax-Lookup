---
id: "python-en-function-threading-current_thread"
language: "python"
lang: "en"
category: "function"
name: "current_thread"
signature: "current_thread()"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.current_thread"
license: "PSF"
updated: "2026-10-01"
---

# current_thread

Return the current `Thread` object, corresponding to the caller's thread
of control.  If the caller's thread of control was not created through the
`threading` module, a dummy thread object with limited functionality is
returned.

The function `currentThread` is a deprecated alias for this function.
