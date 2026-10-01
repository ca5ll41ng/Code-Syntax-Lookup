---
id: "java-en-function-bigdecimal-tobigintegerexact"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.toBigIntegerExact"
signature: "public BigInteger toBigIntegerExact()"
title: "BigDecimal.toBigIntegerExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.toBigIntegerExact

```java
public BigInteger toBigIntegerExact()
```

Converts this `BigDecimal` to a `BigInteger`,
 checking for lost information.  An exception is thrown if this
 `BigDecimal` has a nonzero fractional part.

**返回**

- this `BigDecimal` converted to a `BigInteger`.

**异常**

- **ArithmeticException** — if `this` has a nonzero fractional part.

> *Since 1.5*
