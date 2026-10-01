---
id: "python-zh-function-statistics-kde_random"
language: "python"
lang: "zh"
category: "function"
name: "kde_random"
signature: "kde_random(data, h, kernel='normal', *, seed=None)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/zh-cn/3/library/statistics.html#statistics.kde_random"
license: "PSF"
updated: "2026-10-01"
---

# kde_random

Return a function that makes a random selection from the estimated
probability density function produced by `kde(data, h, kernel)`.

Providing a *seed* allows reproducible selections. In the future, the
values may change slightly as more accurate kernel inverse CDF estimates
are implemented.  The seed may be an integer, float, str, or bytes.

如果 *data* 序列为空则会引发 :exc:`StatisticsError`。

Continuing the example for `kde`, we can use
`kde_random` to generate new random selections from an
estimated probability density function:

   >>> data = [-2.1, -1.3, -0.4, 1.9, 5.1, 6.2]
   >>> rand = kde_random(data, h=1.5, seed=8675309)
   >>> new_selections = [rand() for i in range(10)]
   >>> [round(x, 1) for x in new_selections]
   [0.7, 6.2, 1.2, 6.9, 7.0, 1.8, 2.5, -0.5, -1.8, 5.6]

> *Added in 3.13*
