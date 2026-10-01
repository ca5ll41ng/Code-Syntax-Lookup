---
id: "python-en-function-statistics-correlation"
language: "python"
lang: "en"
category: "function"
name: "correlation"
signature: "correlation(x, y, /, *, method='linear')"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.correlation"
license: "PSF"
updated: "2026-10-01"
---

# correlation

Return the `Pearson's correlation coefficient
<https://en.wikipedia.org/wiki/Pearson_correlation_coefficient>`_
for two sequence inputs. Pearson's correlation coefficient *r* takes values
between -1 and +1. It measures the strength and direction of a linear
relationship.

If *method* is "ranked", computes `Spearman's rank correlation coefficient
<https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient>`_
for two inputs. The data is replaced by ranks.  Ties are averaged so that
equal values receive the same rank.  The resulting coefficient measures the
strength of a monotonic relationship.

Spearman's correlation coefficient is appropriate for ordinal data or for
continuous data that doesn't meet the linear proportion requirement for
Pearson's correlation coefficient.

Both inputs must be of the same length (no less than two), and need
not to be constant, otherwise `StatisticsError` is raised.

Example with `Kepler's laws of planetary motion
<https://en.wikipedia.org/wiki/Kepler's_laws_of_planetary_motion>`_:

```python

>>> # Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and  Neptune
>>> orbital_period = [88, 225, 365, 687, 4331, 10_756, 30_687, 60_190]    # days
>>> dist_from_sun = [58, 108, 150, 228, 778, 1_400, 2_900, 4_500] # million km

>>> # Show that a perfect monotonic relationship exists
>>> correlation(orbital_period, dist_from_sun, method='ranked')
1.0

>>> # Observe that a linear relationship is imperfect
>>> round(correlation(orbital_period, dist_from_sun), 4)
0.9882

>>> # Demonstrate Kepler's third law: There is a linear correlation
>>> # between the square of the orbital period and the cube of the
>>> # distance from the sun.
>>> period_squared = [p * p for p in orbital_period]
>>> dist_cubed = [d * d * d for d in dist_from_sun]
>>> round(correlation(period_squared, dist_cubed), 4)
1.0
```

> *Added in 3.10*

> *Changed in 3.12*: Added support for Spearman's rank correlation coefficient.
