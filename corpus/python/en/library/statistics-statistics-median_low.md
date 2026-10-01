---
id: "python-en-function-statistics-median_low"
language: "python"
lang: "en"
category: "function"
name: "median_low"
signature: "median_low(data)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.median_low"
license: "PSF"
updated: "2026-10-01"
---

# median_low

Return the low median of numeric data.  If *data* is empty,
`StatisticsError` is raised.  *data* can be a sequence or iterable.

The low median is always a member of the data set.  When the number of data
points is odd, the middle value is returned.  When it is even, the smaller of
the two middle values is returned.

```python

>>> median_low([1, 3, 5])
3
>>> median_low([1, 3, 5, 7])
3
```

Use the low median when your data are discrete and you prefer the median to
be an actual data point rather than interpolated.
