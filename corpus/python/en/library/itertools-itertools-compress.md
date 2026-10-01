---
id: "python-en-function-itertools-compress"
language: "python"
lang: "en"
category: "function"
name: "compress"
signature: "compress(data, selectors)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.compress"
license: "PSF"
updated: "2026-10-01"
---

# compress

Make an iterator that returns elements from *data* where the
corresponding element in *selectors* is true.  Stops when either the
*data* or *selectors* iterables have been `exhausted`.  Roughly
equivalent to::

    def compress(data, selectors):
        # compress('ABCDEF', [1,0,1,0,1,1]) → A C E F
        return (datum for datum, selector in zip(data, selectors) if selector)

> *Added in 3.1*
