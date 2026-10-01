---
id: "python-en-function-threading-concurrent_tee"
language: "python"
lang: "en"
category: "function"
name: "concurrent_tee"
signature: "concurrent_tee(iterable, n=2)"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.concurrent_tee"
license: "PSF"
updated: "2026-10-01"
---

# concurrent_tee

Return *n* independent iterators from a single input *iterable*, with
guaranteed behavior when the derived iterators are consumed concurrently.

This function is similar to `itertools.tee`, but is intended for cases
where the source iterator may feed consumers running in different threads.
Each returned iterator yields every value from the underlying iterable, in
the same order.

Internally, values are buffered until every derived iterator has consumed
them.

The returned iterators share the same underlying synchronization lock. Each
individual derived iterator is intended to be consumed by one thread at a
time. If a single derived iterator must itself be shared by multiple
threads, wrap it with `serialize_iterator`.

If *n* is `0`, return an empty tuple. If *n* is negative, raise
`ValueError`.

Example:

```python

import threading

def squares(n):
    for x in range(n):
        yield x * x

def consume(name, iterable):
    for item in iterable:
        print(name, item)

source = squares(5)
left, right = threading.concurrent_tee(source)

t1 = threading.Thread(target=consume, args=("left", left))
t2 = threading.Thread(target=consume, args=("right", right))
t1.start()
t2.start()
t1.join()
t2.join()
```

In this example, both consumer threads see the full sequence of squares
from a single generator expression.

> *Added in 3.15*
