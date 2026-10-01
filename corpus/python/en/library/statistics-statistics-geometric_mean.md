---
id: "python-en-function-statistics-geometric_mean"
language: "python"
lang: "en"
category: "function"
name: "geometric_mean"
signature: "geometric_mean(data)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.geometric_mean"
license: "PSF"
updated: "2026-10-01"
---

# geometric_mean

Convert *data* to floats and compute the geometric mean.

The geometric mean indicates the central tendency or typical value of the
*data* using the product of the values (as opposed to the arithmetic mean
which uses their sum).

Raises a `StatisticsError` if the input dataset is empty,
if it contains a zero, or if it contains a negative value.
The *data* may be a sequence or iterable.

No special efforts are made to achieve exact results.
(However, this may change in the future.)

```python

>>> round(geometric_mean([54, 24, 36]), 1)
36.0
```

> *Added in 3.8*
