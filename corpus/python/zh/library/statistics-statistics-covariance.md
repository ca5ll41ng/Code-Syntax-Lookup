---
id: "python-zh-function-statistics-covariance"
language: "python"
lang: "zh"
category: "function"
name: "covariance"
signature: "covariance(x, y, /)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/zh-cn/3/library/statistics.html#statistics.covariance"
license: "PSF"
updated: "2026-10-01"
---

# covariance

Return the sample covariance of two sequence inputs *x* and *y*. Covariance
is a measure of the joint variability of two inputs.

Both inputs must be of the same length (no less than two), otherwise
`StatisticsError` is raised.

示例：

```python

>>> x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> y = [1, 2, 3, 1, 2, 3, 1, 2, 3]
>>> covariance(x, y)
0.75
>>> z = [9, 8, 7, 6, 5, 4, 3, 2, 1]
>>> covariance(x, z)
-7.5
>>> covariance(z, x)
-7.5
```

> *Added in 3.10*
