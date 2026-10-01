---
id: "python-zh-function-statistics-fmean"
language: "python"
lang: "zh"
category: "function"
name: "fmean"
signature: "fmean(data, weights=None)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/zh-cn/3/library/statistics.html#statistics.fmean"
license: "PSF"
updated: "2026-10-01"
---

# fmean

将 *data* 转换成浮点数并且计算算术平均数。

This runs faster than the `mean` function and it always returns a
`float`.  The *data* may be a sequence or iterable.  If the input
dataset is empty, raises a `StatisticsError`.

```python

>>> fmean([3.5, 4.0, 5.25])
4.25
```

Optional weighting is supported.  For example, a professor assigns a
grade for a course by weighting quizzes at 20%, homework at 20%, a
midterm exam at 30%, and a final exam at 30%:

```python

>>> grades = [85, 92, 83, 91]
>>> weights = [0.20, 0.20, 0.30, 0.30]
>>> fmean(grades, weights)
87.6
```

If *weights* is supplied, it must be the same length as the *data* or
a `ValueError` will be raised.

> *Added in 3.8*

> *Changed in 3.11*: Added support for *weights*.
