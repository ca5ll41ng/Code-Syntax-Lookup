---
id: "python-en-function-threading-enumerate"
language: "python"
lang: "en"
category: "function"
name: "enumerate"
signature: "enumerate()"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.enumerate"
license: "PSF"
updated: "2026-10-01"
---

# enumerate

Return a list of all `Thread` objects currently active.  The list
includes daemonic threads and dummy thread objects created by
`current_thread`.  It excludes terminated threads and threads
that have not yet been started.  However, the main thread is always part
of the result, even when terminated.
