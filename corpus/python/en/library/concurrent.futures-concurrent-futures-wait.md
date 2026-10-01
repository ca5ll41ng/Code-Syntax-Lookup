---
id: "python-en-function-concurrent-futures-wait"
language: "python"
lang: "en"
category: "function"
name: "wait"
signature: "wait(fs, timeout=None, return_when=ALL_COMPLETED)"
directive: "function"
module: "concurrent.futures"
source_url: "https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.wait"
license: "PSF"
updated: "2026-10-01"
---

# wait

Wait for the `Future` instances (possibly created by different
`Executor` instances) given by *fs* to complete. Duplicate futures
given to *fs* are removed and will be returned only once. Returns a named
2-tuple of sets.  The first set, named `done`, contains the futures that
completed (finished or cancelled futures) before the wait completed.  The
second set, named `not_done`, contains the futures that did not complete
(pending or running futures).

*timeout* can be used to control the maximum number of seconds to wait before
returning.  *timeout* can be an int or float.  If *timeout* is not specified
or `None`, there is no limit to the wait time.

*return_when* indicates when this function should return.  It must be one of
the following constants:

list-table::
