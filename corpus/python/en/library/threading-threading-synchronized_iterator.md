---
id: "python-en-function-threading-synchronized_iterator"
language: "python"
lang: "en"
category: "function"
name: "synchronized_iterator"
signature: "synchronized_iterator(func)"
directive: "function"
module: "threading"
source_url: "https://docs.python.org/3/library/threading.html#threading.synchronized_iterator"
license: "PSF"
updated: "2026-10-01"
---

# synchronized_iterator

Wrap an iterator-producing callable so that each iterator it returns is
automatically passed through `serialize_iterator`.

This is especially useful as a `decorator` for generator functions,
allowing their generator-iterators to be consumed from multiple threads.

Example:

```python

import threading

@threading.synchronized_iterator
def squares(n):
    for x in range(n):
        yield x * x

def consume(name, iterable):
    for item in iterable:
        print(name, item)

source = squares(5)

t1 = threading.Thread(target=consume, args=("left", source))
t2 = threading.Thread(target=consume, args=("right", source))
t1.start()
t2.start()
t1.join()
t2.join()
```

The returned wrapper preserves the metadata of *func*, such as its name and
wrapped function reference.

> *Added in 3.15*
