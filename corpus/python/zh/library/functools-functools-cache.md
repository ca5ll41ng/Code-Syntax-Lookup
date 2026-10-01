---
id: "python-zh-function-functools-cache"
language: "python"
lang: "zh"
category: "function"
name: "cache"
signature: "cache(user_function)"
directive: "decorator"
module: "functools"
source_url: "https://docs.python.org/zh-cn/3/library/functools.html#functools.cache"
license: "PSF"
updated: "2026-10-01"
---

# cache

Simple lightweight unbounded function cache.  Sometimes called
["memoize"](https://en.wikipedia.org/wiki/Memoization).

Returns the same as `lru_cache(maxsize=None)`, creating a thin
wrapper around a dictionary lookup for the function arguments.  Because it
never needs to evict old values, this is smaller and faster than
`lru_cache` with a size limit.

例如::

     @cache
     def factorial(n):
         return n * factorial(n-1) if n else 1

     >>> factorial(10)   # no previously cached result, makes 11 recursive calls
     3628800
     >>> factorial(5)    # no new calls, just returns the cached result
     120
     >>> factorial(12)   # two new recursive calls, factorial(10) is cached
     479001600

The cache is threadsafe so that the wrapped function can be used in
multiple threads.  This means that the underlying data structure will
remain coherent during concurrent updates.

It is possible for the wrapped function to be called more than once if
another thread makes an additional call before the initial call has been
completed and cached.

Call-once behavior is not guaranteed because locks are not held during the
function call. Potentially another call with the same arguments could
occur while the first call is still running.

> *Added in 3.9*
