---
id: "python-zh-function-math-isclose"
language: "python"
lang: "zh"
category: "function"
name: "isclose"
signature: "isclose(a, b, *, rel_tol=1e-09, abs_tol=0.0)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/zh-cn/3/library/math.html#math.isclose"
license: "PSF"
updated: "2026-10-01"
---

# isclose

Return `True` if the values *a* and *b* are close to each other and
`False` otherwise.

Whether or not two values are considered close is determined according to
given absolute and relative tolerances.  If no errors occur, the result will
be: `abs(a-b) <= max(rel_tol * max(abs(a), abs(b)), abs_tol)`.

*rel_tol* is the relative tolerance -- it is the maximum allowed difference
between *a* and *b*, relative to the larger absolute value of *a* or *b*.
For example, to set a tolerance of 5%, pass `rel_tol=0.05`.  The default
tolerance is `1e-09`, which assures that the two values are the same
within about 9 decimal digits.  *rel_tol* must be nonnegative and less
than `1.0`.

*abs_tol* is the absolute tolerance; it defaults to `0.0` and it must be
nonnegative.  When comparing `x` to `0.0`, `isclose(x, 0)` is computed
as `abs(x) <= rel_tol  * abs(x)`, which is `False` for any nonzero `x` and
*rel_tol* less than `1.0`.  So add an appropriate positive *abs_tol* argument
to the call.

The IEEE 754 special values of `NaN`, `inf`, and `-inf` will be
handled according to IEEE rules.  Specifically, `NaN` is not considered
close to any other value, including `NaN`.  `inf` and `-inf` are only
considered close to themselves.

> *Added in 3.5*

> **Seealso**
>
> :pep:`485` —— 用于测试近似相等的函数
>
