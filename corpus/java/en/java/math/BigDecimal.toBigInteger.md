---
id: "java-en-function-bigdecimal-tobiginteger"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.toBigInteger"
signature: "public BigInteger toBigInteger()"
title: "BigDecimal.toBigInteger"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.toBigInteger

```java
public BigInteger toBigInteger()
```

Converts this `BigDecimal` to a `BigInteger`.
 This conversion is analogous to the
 narrowing primitive conversion from `double` to
 `long` as defined in
 The Java Language Specification:
 any fractional part of this
 `BigDecimal` will be discarded.  Note that this
 conversion can lose information about the precision of the
 `BigDecimal` value.
 

 To have an exception thrown if the conversion is inexact (in
 other words if a nonzero fractional part is discarded), use the
 `toBigIntegerExact` method.

**返回**

- this `BigDecimal` converted to a `BigInteger`.
