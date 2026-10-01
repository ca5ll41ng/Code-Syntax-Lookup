---
id: "python-en-function-statistics-kde"
language: "python"
lang: "en"
category: "function"
name: "kde"
signature: "kde(data, h, kernel='normal', *, cumulative=False)"
directive: "function"
module: "statistics"
source_url: "https://docs.python.org/3/library/statistics.html#statistics.kde"
license: "PSF"
updated: "2026-10-01"
---

# kde

`Kernel Density Estimation (KDE)
<https://www.itm-conferences.org/articles/itmconf/pdf/2018/08/itmconf_sam2018_00037.pdf>`_:
Create a continuous probability density function or cumulative
distribution function from discrete samples.

The basic idea is to smooth the data using `a kernel function
<https://en.wikipedia.org/wiki/Kernel_(statistics)>`_.
to help draw inferences about a population from a sample.

The degree of smoothing is controlled by the scaling parameter *h*
which is called the bandwidth.  Smaller values emphasize local
features while larger values give smoother results.

The *kernel* determines the relative weights of the sample data
points.  Generally, the choice of kernel shape does not matter
as much as the more influential bandwidth smoothing parameter.

Kernels that give some weight to every sample point include
*normal* (*gauss*), *logistic*, and *sigmoid*.

Kernels that only give weight to sample points within the bandwidth
include *rectangular* (*uniform*), *triangular*, *parabolic*
(*epanechnikov*), *quartic* (*biweight*), *triweight*, and *cosine*.

If *cumulative* is true, will return a cumulative distribution function.

A `StatisticsError` will be raised if the *data* sequence is empty.

`Wikipedia has an example
<https://en.wikipedia.org/wiki/Kernel_density_estimation#Example>`_
where we can use `kde` to generate and plot a probability
density function estimated from a small sample:

```python

>>> sample = [-2.1, -1.3, -0.4, 1.9, 5.1, 6.2]
>>> f_hat = kde(sample, h=1.5)
>>> xarr = [i/100 for i in range(-750, 1100)]
>>> yarr = [f_hat(x) for x in xarr]
```

The points in `xarr` and `yarr` can be used to make a PDF plot:

image:: kde_example.png

Because the returned `f_hat` function is typically called many times,
it caches the *data* for performance. To support dynamic datasets, this
cache automatically refreshes whenever the length of the *data* changes.
This allows new samples to be added as they become available.

> *Added in 3.13*
