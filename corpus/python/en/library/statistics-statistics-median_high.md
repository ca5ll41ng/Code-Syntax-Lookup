---
id: "python-en-function-statistics-median_high"
language: "python"
lang: "en"
category: "function"
name: "median_high"
signature: "median_high(data)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.median_high"
license: "PSF"
updated: "2026-10-01"
---

# median_high

Return the high median of data.  If *data* is empty, `StatisticsError`
is raised.  *data* can be a sequence or iterable.

The high median is always a member of the data set.  When the number of data
points is odd, the middle value is returned.  When it is even, the larger of
the two middle values is returned.

```python

>>> median_high([1, 3, 5])
3
>>> median_high([1, 3, 5, 7])
5
```

Use the high median when your data are discrete and you prefer the median to
be an actual data point rather than interpolated.
