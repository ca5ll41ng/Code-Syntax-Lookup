---
id: "python-en-function-concurrent-futures-as_completed"
language: "python"
lang: "en"
category: "function"
name: "as_completed"
signature: "as_completed(fs, timeout=None)"
directive: "function"
module: "concurrent.futures"
source_url: "https://docs.python.org/3/library/concurrent.futures.html#concurrent.futures.as_completed"
license: "PSF"
updated: "2026-10-01"
---

# as_completed

Returns an iterator over the `Future` instances (possibly created by
different `Executor` instances) given by *fs* that yields futures as
they complete (finished or cancelled futures). Any futures given by *fs* that
are duplicated will be returned once. Any futures that completed before
`as_completed` is called will be yielded first.  The returned iterator
raises a `TimeoutError` if `~iterator.__next__`
is called and the result isn't available after *timeout* seconds from the
original call to `as_completed`.  *timeout* can be an int or float. If
*timeout* is not specified or `None`, there is no limit to the wait time.
