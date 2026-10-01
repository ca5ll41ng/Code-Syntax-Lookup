---
id: "python-en-function-random-expovariate"
language: "python"
lang: "en"
category: "function"
name: "expovariate"
signature: "expovariate(lambd = 1.0)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.expovariate"
license: "PSF"
updated: "2026-10-01"
---

# expovariate

Exponential distribution.  *lambd* is 1.0 divided by the desired
mean.  It should be nonzero.  (The parameter would be called
"lambda", but that is a reserved word in Python.)  Returned values
range from 0 to positive infinity if *lambd* is positive, and from
negative infinity to 0 if *lambd* is negative.

> *Changed in 3.12*: Added the default value for ``lambd``.
