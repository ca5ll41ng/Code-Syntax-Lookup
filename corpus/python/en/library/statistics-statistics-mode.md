---
id: "python-en-function-statistics-mode"
language: "python"
lang: "en"
category: "function"
name: "mode"
signature: "mode(data)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.mode"
license: "PSF"
updated: "2026-10-01"
---

# mode

Return the single most common data point from discrete or nominal *data*.
The mode (when it exists) is the most typical value and serves as a
measure of central location.

If there are multiple modes with the same frequency, returns the first one
encountered in the *data*.  If the smallest or largest of those is
desired instead, use `min(multimode(data))` or `max(multimode(data))`.
If the input *data* is empty, `StatisticsError` is raised.

`mode` assumes discrete data and returns a single value. This is the
standard treatment of the mode as commonly taught in schools:

```python

>>> mode([1, 1, 2, 3, 3, 3, 3, 4])
3
```

The mode is unique in that it is the only statistic in this package that
also applies to nominal (non-numeric) data:

```python

>>> mode(["red", "blue", "blue", "red", "green", "red", "red"])
'red'
```

Only hashable inputs are supported.  To handle type `set`,
consider casting to `frozenset`.  To handle type `list`,
consider casting to `tuple`.  For mixed or nested inputs, consider
using this slower quadratic algorithm that only depends on equality tests:
`max(data, key=data.count)`.

> *Changed in 3.8*: Now handles multimodal datasets by returning the first mode encountered. Formerly, it raised :exc:`StatisticsError` when more than one mode was found.
