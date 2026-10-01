---
id: "python-en-function-cmath-phase"
language: "python"
lang: "en"
category: "function"
name: "phase"
signature: "phase(z)"
directive: "function"
module: "cmath"
source_url: "https://docs.python.org/3/library/cmath.html#cmath.phase"
license: "PSF"
updated: "2026-10-01"
---

# phase

Return the phase of *z* (also known as the *argument* of *z*), as a float.
`phase(z)` is equivalent to `math.atan2(z.imag, z.real)`.  The result
lies in the range [-\ *π*, *π*], and the branch cut for this operation lies
along the negative real axis.  The sign of the result is the same as the
sign of `z.imag`, even when `z.imag` is zero::

   >>> phase(-1+0j)
   3.141592653589793
   >>> phase(-1-0j)
   -3.141592653589793
