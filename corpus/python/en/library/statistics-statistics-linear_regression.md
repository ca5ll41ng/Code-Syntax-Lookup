---
id: "python-en-function-statistics-linear_regression"
language: "python"
lang: "en"
category: "function"
name: "linear_regression"
signature: "linear_regression(x, y, /, *, proportional=False)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.linear_regression"
license: "PSF"
updated: "2026-10-01"
---

# linear_regression

Return the slope and intercept of `simple linear regression
<https://en.wikipedia.org/wiki/Simple_linear_regression>`_
parameters estimated using ordinary least squares. Simple linear
regression describes the relationship between an independent variable *x* and
a dependent variable *y* in terms of this linear function:

   *y = slope \* x + intercept + noise*

where `slope` and `intercept` are the regression parameters that are
estimated, and `noise` represents the
variability of the data that was not explained by the linear regression
(it is equal to the difference between predicted and actual values
of the dependent variable).

Both inputs must be sequences of the same length (no less than two), and
the independent variable *x* cannot be constant;
otherwise a `StatisticsError` is raised.

For example, we can use the `release dates of the Monty
Python films <https://en.wikipedia.org/wiki/Monty_Python#Films>`_
to predict the cumulative number of Monty Python films
that would have been produced by 2019
assuming that they had kept the pace.

```python

>>> year = [1971, 1975, 1979, 1982, 1983]
>>> films_total = [1, 2, 3, 4, 5]
>>> slope, intercept = linear_regression(year, films_total)
>>> round(slope * 2019 + intercept)
16
```

If *proportional* is true, the independent variable *x* and the
dependent variable *y* are assumed to be directly proportional.
The data is fit to a line passing through the origin.
Since the *intercept* will always be 0.0, the underlying linear
function simplifies to:

   *y = slope \* x + noise*

Continuing the example from `correlation`, we look to see
how well a model based on major planets can predict the orbital
distances for dwarf planets:

```python

>>> model = linear_regression(period_squared, dist_cubed, proportional=True)
>>> slope = model.slope

>>> # Dwarf planets:   Pluto,  Eris,    Makemake, Haumea, Ceres
>>> orbital_periods = [90_560, 204_199, 111_845, 103_410, 1_680]  # days
>>> predicted_dist = [math.cbrt(slope * (p * p)) for p in orbital_periods]
>>> list(map(round, predicted_dist))
[5912, 10166, 6806, 6459, 414]

>>> [5_906, 10_152, 6_796, 6_450, 414]  # actual distance in million km
[5906, 10152, 6796, 6450, 414]
```

> *Added in 3.10*

> *Changed in 3.11*: Added support for *proportional*.
