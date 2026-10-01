---
id: "java-en-function-bigdecimal-longvalue"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.longValue"
signature: "public long longValue()"
title: "BigDecimal.longValue"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.longValue

```java
public long longValue()
```

Converts this `BigDecimal` to a `long`.
 This conversion is analogous to the
 narrowing primitive conversion from `double` to
 `short` as defined in
 The Java Language Specification:
 any fractional part of this
 `BigDecimal` will be discarded, and if the resulting
 "`BigInteger`" is too big to fit in a
 `long`, only the low-order 64 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude and precision of this `BigDecimal` value as well
 as return a result with the opposite sign.

**返回**

- this `BigDecimal` converted to a `long`.
