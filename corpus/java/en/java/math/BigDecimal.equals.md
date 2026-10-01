---
id: "java-en-function-bigdecimal-equals"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.equals"
signature: "public boolean equals(Object x)"
title: "BigDecimal.equals"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.equals

```java
public boolean equals(Object x)
```

Compares this `BigDecimal` with the specified `Object` for equality.  Unlike `compareTo(BigDecimal)
 compareTo`, this method considers two `BigDecimal`
 objects equal only if they are equal in value and
 scale. Therefore 2.0 is not equal to 2.00 when compared by this
 method since the former has [`BigInteger`, `scale`]
 components equal to [20, 1] while the latter has components
 equal to [200, 2].

 One example that shows how 2.0 and 2.00 are not
 substitutable for each other under some arithmetic operations
 are the two expressions:

 `new BigDecimal("2.0" ).divide(BigDecimal.valueOf(3),
 HALF_UP)` which evaluates to 0.7 and 

 `new BigDecimal("2.00").divide(BigDecimal.valueOf(3),
 HALF_UP)` which evaluates to 0.67.
 The behavior of this method is analogous to checking the
 `#repEquivalence representation equivalence`
 of `double` values.

**参数**

- **x** — `Object` to which this `BigDecimal` is to be compared.

**返回**

- `true` if and only if the specified `Object` is a `BigDecimal` whose value and scale are equal to this `BigDecimal`'s.

**参见**

- #compareTo(java.math.BigDecimal)
- #hashCode
