---
id: "java-en-function-bigdecimal-compareto"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.compareTo"
signature: "public int compareTo(BigDecimal val)"
title: "BigDecimal.compareTo"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.compareTo

```java
public int compareTo(BigDecimal val)
```

Compares this `BigDecimal` numerically with the specified
 `BigDecimal`.  Two `BigDecimal` objects that are
 equal in value but have a different scale (like 2.0 and 2.00)
 are considered equal by this method. Such values are in the
 same cohort.

 This method is provided in preference to individual methods for
 each of the six boolean comparison operators (<, ==,
 >, >=, !=, <=).  The suggested
 idiom for performing these comparisons is: `(x.compareTo(y)` &lt;op&gt; `0)`, where
 &lt;op&gt; is one of the six comparison operators.
 Note: this class has a natural ordering that is inconsistent with equals.
 The behavior of comparing the result of this method for
 equality to 0 is analogous to checking the `#fpNumericalEq numerical equality` of `double` values.

**参数**

- **val** — `BigDecimal` to which this `BigDecimal` is to be compared.

**返回**

- -1, 0, or 1 as this `BigDecimal` is numerically less than, equal to, or greater than `val`.
