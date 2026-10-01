---
id: "python-en-function-statistics-median_grouped"
language: "python"
lang: "en"
category: "function"
name: "median_grouped"
signature: "median_grouped(data, interval=1.0)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.median_grouped"
license: "PSF"
updated: "2026-10-01"
---

# median_grouped

Estimates the median for numeric data that has been `grouped or binned
<https://en.wikipedia.org/wiki/Data_binning>`_ around the midpoints
of consecutive, fixed-width intervals.

The *data* can be any iterable of numeric data with each value being
exactly the midpoint of a bin.  At least one value must be present.

The *interval* is the width of each bin.

For example, demographic information may have been summarized into
consecutive ten-year age groups with each group being represented
by the 5-year midpoints of the intervals:

```python

>>> from collections import Counter
>>> demographics = Counter({
...    25: 172,   # 20 to 30 years old
...    35: 484,   # 30 to 40 years old
...    45: 387,   # 40 to 50 years old
...    55:  22,   # 50 to 60 years old
...    65:   6,   # 60 to 70 years old
... })
...
```

The 50th percentile (median) is the 536th person out of the 1071
member cohort.  That person is in the 30 to 40 year old age group.

The regular `median` function would assume that everyone in the
tricenarian age group was exactly 35 years old.  A more tenable
assumption is that the 484 members of that age group are evenly
distributed between 30 and 40.  For that, we use
`median_grouped`:

```python

>>> data = list(demographics.elements())
>>> median(data)
35
>>> round(median_grouped(data, interval=10), 1)
37.5
```

The caller is responsible for making sure the data points are separated
by exact multiples of *interval*.  This is essential for getting a
correct result.  The function does not check this precondition.

Inputs may be any numeric type that can be coerced to a float during
the interpolation step.
