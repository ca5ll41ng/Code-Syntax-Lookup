---
id: "python-en-function-statistics-multimode"
language: "python"
lang: "en"
category: "function"
name: "multimode"
signature: "multimode(data)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.multimode"
license: "PSF"
updated: "2026-10-01"
---

# multimode

Return a list of the most frequently occurring values in the order they
were first encountered in the *data*.  Will return more than one result if
there are multiple modes or an empty list if the *data* is empty:

```python

>>> multimode('aabbbbccddddeeffffgg')
['b', 'd', 'f']
>>> multimode('')
[]
```

> *Added in 3.8*
