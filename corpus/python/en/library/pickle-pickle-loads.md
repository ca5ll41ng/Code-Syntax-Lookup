---
id: "python-en-function-pickle-loads"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B301"],"cwe":["CWE-502"],"note":"Pickle and modules that wrap it can be unsafe when used to deserialize untrusted data, possible security issue."}
name: "loads"
signature: "loads(data, /, *, fix_imports=True, encoding=\"ASCII\", errors=\"strict\", buffers=None)"
directive: "function"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.loads"
license: "PSF"
updated: "2026-10-01"
---

# loads

Return the reconstituted object hierarchy of the pickled representation
*data* of an object. *data* must be a `bytes-like object`.

The protocol version of the pickle is detected automatically, so no
protocol argument is needed.  Bytes past the pickled representation
of the object are ignored.

Arguments *fix_imports*, *encoding*, *errors*, *strict* and *buffers*
have the same meaning as in the `Unpickler` constructor.

> *Changed in 3.8*: The *buffers* argument was added.
