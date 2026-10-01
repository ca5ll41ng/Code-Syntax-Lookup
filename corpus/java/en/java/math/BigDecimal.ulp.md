---
id: "java-en-function-bigdecimal-ulp"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ulp"
signature: "public BigDecimal ulp()"
title: "BigDecimal.ulp"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ulp

```java
public BigDecimal ulp()
```

Returns the size of an ulp, a unit in the last place, of this
 `BigDecimal`.  An ulp of a nonzero `BigDecimal`
 value is the positive distance between this value and the
 `BigDecimal` value next larger in magnitude with the
 same number of digits.  An ulp of a zero value is numerically
 equal to 1 with the scale of `this`.  The result is
 stored with the same scale as `this` so the result
 for zero and nonzero values is equal to `[1,
 this.scale()]`.

**返回**

- the size of an ulp of `this`

> *Since 1.5*
