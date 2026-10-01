---
id: "python-zh-function-statistics-normaldist"
language: "python"
lang: "zh"
category: "function"
name: "NormalDist"
signature: "NormalDist(mu=0.0, sigma=1.0)"
directive: "class"
module: "statistics"
source_url: "https://docs.python.org/zh-cn/3/library/statistics.html#statistics.NormalDist"
license: "PSF"
updated: "2026-10-01"
---

# NormalDist

Returns a new *NormalDist* object where *mu* represents the `arithmetic
mean <https://en.wikipedia.org/wiki/Arithmetic_mean>`_ and *sigma*
represents the `standard deviation
<https://en.wikipedia.org/wiki/Standard_deviation>`_.

若 *sigma* 为负数，将会引发 :exc:`StatisticsError`。

attribute:: mean

attribute:: median

attribute:: mode

attribute:: stdev

attribute:: variance

classmethod:: NormalDist.from_samples(data)

method:: NormalDist.samples(n, *, seed=None)

method:: NormalDist.pdf(x)

method:: NormalDist.cdf(x)

method:: NormalDist.inv_cdf(p)

method:: NormalDist.overlap(other)

method:: NormalDist.quantiles(n=4)

method:: NormalDist.zscore(x)

Instances of `NormalDist` support addition, subtraction,
multiplication and division by a constant.  These operations
are used for translation and scaling.  For example:

```python

>>> temperature_february = NormalDist(5, 2.5)             # Celsius
>>> temperature_february * (9/5) + 32                     # Fahrenheit
NormalDist(mu=41.0, sigma=4.5)
```

Dividing a constant by an instance of `NormalDist` is not supported
because the result wouldn't be normally distributed.

Since normal distributions arise from additive effects of independent
variables, it is possible to `add and subtract two independent normally
distributed random variables
<https://en.wikipedia.org/wiki/Sum_of_normally_distributed_random_variables>`_
represented as instances of `NormalDist`.  For example:

```python

>>> birth_weights = NormalDist.from_samples([2.5, 3.1, 2.1, 2.4, 2.7, 3.5])
>>> drug_effects = NormalDist(0.4, 0.15)
>>> combined = birth_weights + drug_effects
>>> round(combined.mean, 1)
3.1
>>> round(combined.stdev, 1)
0.5
```

> *Added in 3.8*
