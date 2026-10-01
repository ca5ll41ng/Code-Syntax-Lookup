---
id: "java-en-function-bigdecimal-toengineeringstring"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.toEngineeringString"
signature: "public String toEngineeringString()"
title: "BigDecimal.toEngineeringString"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.toEngineeringString

```java
public String toEngineeringString()
```

Returns a string representation of this `BigDecimal`,
 using engineering notation if an exponent is needed.

 

Returns a string that represents the `BigDecimal` as
 described in the `toString` method, except that if
 exponential notation is used, the power of ten is adjusted to
 be a multiple of three (engineering notation) such that the
 integer part of nonzero values will be in the range 1 through
 999.  If exponential notation is used for zero values, a
 decimal point and one or two fractional zero digits are used so
 that the scale of the zero value is preserved.  Note that
 unlike the output of `toString`, the output of this
 method is not guaranteed to recover the same [integer,
 scale] pair of this `BigDecimal` if the output string is
 converting back to a `BigDecimal` using the `BigDecimal(String) string constructor`.  The result of this method meets
 the weaker constraint of always producing a numerically equal
 result from applying the string constructor to the method's output.

**返回**

- string representation of this `BigDecimal`, using engineering notation if an exponent is needed.

> *Since 1.5*
