---
id: "java-en-function-bigdecimal-intvalue"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.intValue"
signature: "public int intValue()"
title: "BigDecimal.intValue"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.intValue

```java
public int intValue()
```

Converts this `BigDecimal` to an `int`.
 This conversion is analogous to the
 narrowing primitive conversion from `double` to
 `short` as defined in
 The Java Language Specification:
 any fractional part of this
 `BigDecimal` will be discarded, and if the resulting
 "`BigInteger`" is too big to fit in an
 `int`, only the low-order 32 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude and precision of this `BigDecimal`
 value as well as return a result with the opposite sign.

**返回**

- this `BigDecimal` converted to an `int`.
