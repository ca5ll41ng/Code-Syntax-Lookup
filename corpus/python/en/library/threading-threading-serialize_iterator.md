---
id: "python-en-function-threading-serialize_iterator"
language: "python"
lang: "en"
category: "function"
name: "serialize_iterator"
signature: "serialize_iterator(iterable)"
directive: "class"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.serialize_iterator"
license: "PSF"
updated: "2026-10-01"
---

# serialize_iterator

Return an iterator wrapper that serializes concurrent calls to
`~iterator.__next__` using a lock.

If the wrapped iterator also defines `~generator.send`,
`~generator.throw`, or `~generator.close`, those calls
are serialized as well.

This makes it possible to share a single iterator, including a generator
iterator, between multiple threads. A lock ensures that calls are handled
one at a time. No values are duplicated or skipped by the wrapper itself.
Each item from the underlying iterator is given to exactly one caller.

This wrapper does not copy or buffer values. Threads that call
`next` while another thread is already advancing the iterator will
block until the active call completes.

Example:

```python

import threading

def squares(n):
    for x in range(n):
        yield x * x

def consume(name, iterable):
    for item in iterable:
        print(name, item)

source = threading.serialize_iterator(squares(5))

t1 = threading.Thread(target=consume, args=("left", source))
t2 = threading.Thread(target=consume, args=("right", source))
t1.start()
t2.start()
t1.join()
t2.join()
```

In this example, each number is printed exactly once, but the work is shared
between the two threads.

> *Added in 3.15*
