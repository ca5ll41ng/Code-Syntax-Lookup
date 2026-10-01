---
id: "python-en-function-statistics-harmonic_mean"
language: "python"
lang: "en"
category: "function"
name: "harmonic_mean"
signature: "harmonic_mean(data, weights=None)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.harmonic_mean"
license: "PSF"
updated: "2026-10-01"
---

# harmonic_mean

Return the harmonic mean of *data*, a sequence or iterable of
real-valued numbers.  If *weights* is omitted or `None`, then
equal weighting is assumed.

The harmonic mean is the reciprocal of the arithmetic `mean` of the
reciprocals of the data. For example, the harmonic mean of three values *a*,
*b* and *c* will be equivalent to `3/(1/a + 1/b + 1/c)`.  If one of the
values is zero, the result will be zero.

The harmonic mean is a type of average, a measure of the central
location of the data.  It is often appropriate when averaging
ratios or rates, for example speeds.

Suppose a car travels 10 km at 40 km/hr, then another 10 km at 60 km/hr.
What is the average speed?

```python

>>> harmonic_mean([40, 60])
48.0
```

Suppose a car travels 40 km/hr for 5 km, and when traffic clears,
speeds-up to 60 km/hr for the remaining 30 km of the journey. What
is the average speed?

```python

>>> harmonic_mean([40, 60], weights=[5, 30])
56.0
```

`StatisticsError` is raised if *data* is empty, any element
is less than zero, or if the weighted sum isn't positive.

The current algorithm has an early-out when it encounters a zero
in the input.  This means that the subsequent inputs are not tested
for validity.  (This behavior may change in the future.)

> *Added in 3.6*

> *Changed in 3.10*: Added support for *weights*.
