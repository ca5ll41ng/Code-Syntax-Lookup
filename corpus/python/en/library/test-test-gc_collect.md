---
id: "python-en-function-test-gc_collect"
language: "python"
lang: "en"
category: "function"
name: "gc_collect"
signature: "gc_collect()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.gc_collect"
license: "PSF"
updated: "2026-10-01"
---

# gc_collect

Force as many objects as possible to be collected.  This is needed because
timely deallocation is not guaranteed by the garbage collector.  This means
that `__del__` methods may be called later than expected and weakrefs
may remain alive for longer than expected.
