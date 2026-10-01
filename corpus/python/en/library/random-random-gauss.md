---
id: "python-en-function-random-gauss"
language: "python"
lang: "en"
category: "function"
name: "gauss"
signature: "gauss(mu=0.0, sigma=1.0)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.gauss"
license: "PSF"
updated: "2026-10-01"
---

# gauss

Normal distribution, also called the Gaussian distribution.
*mu* is the mean,
and *sigma* is the standard deviation.  This is slightly faster than
the `normalvariate` function defined below.

Multithreading note:  When two threads call this function
simultaneously, it is possible that they will receive the
same return value.  This can be avoided in three ways.
1) Have each thread use a different instance of the random
number generator. 2) Put locks around all calls. 3) Use the
slower, but thread-safe `normalvariate` function instead.

> *Changed in 3.11*: *mu* and *sigma* now have default arguments.
