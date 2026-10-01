---
id: "java-en-function-randomgenerator-equidoubles"
language: "java"
lang: "en"
category: "function"
name: "RandomGenerator.equiDoubles"
signature: "default DoubleStream equiDoubles(double left, double right, boolean isLeftIncluded, boolean isRightIncluded)"
title: "RandomGenerator.equiDoubles"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGenerator.equiDoubles

```java
default DoubleStream equiDoubles(double left, double right, boolean isLeftIncluded, boolean isRightIncluded)
```

Returns an effectively unlimited stream of pseudorandomly chosen
 `double` values, where each value is between the specified
 `left` boundary and the specified `right` boundary.
 The `left` boundary is included as indicated by
 `isLeftIncluded`; similarly, the `right` boundary is included
 as indicated by `isRightIncluded`.

 

The stream potentially produces all multiples k &delta;
 (k integer) lying in the interval specified by the parameters,
 where &delta; > 0 is the smallest number for which all these multiples
 are exact `double`s.
 They are therefore all equidistant.
 The uniformity of the distribution of the `double`s produced by
 the stream depends on the quality of the underlying `nextLong`.

 It then computes both the smallest integer kl
 such that kl &delta; lies inside
 the given interval, and the smallest integer n > 0 such that
 (kl + n) &delta; lies
 outside the interval.
 Finally, it returns a stream which generates the `double`s
 according to (kl + `nextLong(`n`)`)
 &delta;.
 The stream never produces `-0.0`, although it may produce
 `0.0` if the specified interval contains 0.

**参数**

- **left** — the left boundary
- **right** — the right boundary
- **isLeftIncluded** — whether the `left` boundary is included
- **isRightIncluded** — whether the `right` boundary is included

**返回**

- a stream of pseudorandomly chosen `double` values, each between `left` and `right`, as specified above.

**异常**

- **IllegalArgumentException** — if `left` is not finite, or `right` is not finite, or if the specified interval is empty.

> *Since 22*
