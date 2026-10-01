---
id: "java-en-function-biginteger-intvalue"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.intValue"
signature: "public int intValue()"
title: "BigInteger.intValue"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.intValue

```java
public int intValue()
```

Converts this BigInteger to an `int`.  This
 conversion is analogous to a
 narrowing primitive conversion from `long` to
 `int` as defined in
 The Java Language Specification:
 if this BigInteger is too big to fit in an
 `int`, only the low-order 32 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude of the BigInteger value as well as return a
 result with the opposite sign.

**返回**

- this BigInteger converted to an `int`.

**参见**

- #intValueExact()
