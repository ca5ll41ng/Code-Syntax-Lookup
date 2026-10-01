---
id: "python-en-function-multiprocessing-namespace"
language: "python"
lang: "en"
category: "function"
name: "Namespace"
directive: "class"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.Namespace"
license: "PSF"
updated: "2026-10-01"
---

# Namespace

A type that can register with `SyncManager`.

A namespace object has no public methods, but does have writable attributes.
Its representation shows the values of its attributes.

However, when using a proxy for a namespace object, an attribute beginning
with `'_'` will be an attribute of the proxy and not an attribute of the
referent:

```python

>>> mp_context = multiprocessing.get_context('spawn')
>>> manager = mp_context.Manager()
>>> Global = manager.Namespace()
>>> Global.x = 10
>>> Global.y = 'hello'
>>> Global._z = 12.3    # this is an attribute of the proxy
>>> print(Global)
Namespace(x=10, y='hello')
```
