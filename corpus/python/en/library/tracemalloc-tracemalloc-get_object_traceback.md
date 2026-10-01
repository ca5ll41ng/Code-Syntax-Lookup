---
id: "python-en-function-tracemalloc-get_object_traceback"
language: "python"
lang: "en"
category: "function"
name: "get_object_traceback"
signature: "get_object_traceback(obj)"
directive: "function"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.get_object_traceback"
license: "PSF"
updated: "2026-10-01"
---

# get_object_traceback

Get the traceback where the Python object *obj* was allocated.
Return a `Traceback` instance, or `None` if the `tracemalloc`
module is not tracing memory allocations or did not trace the allocation of
the object.

See also `gc.get_referrers` and `sys.getsizeof` functions.
