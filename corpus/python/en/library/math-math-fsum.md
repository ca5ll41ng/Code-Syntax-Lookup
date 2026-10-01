---
id: "python-en-function-math-fsum"
language: "python"
lang: "en"
category: "function"
name: "fsum"
signature: "fsum(iterable)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.fsum"
license: "PSF"
updated: "2026-10-01"
---

# fsum

Return an accurate floating-point sum of values in the iterable.  Avoids
loss of precision by tracking multiple intermediate partial sums.

The algorithm's accuracy depends on IEEE-754 arithmetic guarantees and the
typical case where the rounding mode is half-even.  On some non-Windows
builds, the underlying C library uses extended precision addition and may
occasionally double-round an intermediate sum causing it to be off in its
least significant bit.

For further discussion and two alternative approaches, see the `ASPN cookbook
recipes for accurate floating-point summation
<https://code.activestate.com/recipes/393090-binary-floating-point-summation-accurate-to-full-p/>`_\.
