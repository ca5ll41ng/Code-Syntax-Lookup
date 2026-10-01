---
id: "java-en-function-biginteger-floatvalue"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.floatValue"
signature: "public float floatValue()"
title: "BigInteger.floatValue"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.floatValue

```java
public float floatValue()
```

Converts this BigInteger to a `float`.  This
 conversion is similar to the
 narrowing primitive conversion from `double` to
 `float` as defined in
 The Java Language Specification:
 if this BigInteger has too great a magnitude
 to represent as a `float`, it will be converted to
 `NEGATIVE_INFINITY` or `POSITIVE_INFINITY` as appropriate.  Note that even when
 the return value is finite, this conversion can lose
 information about the precision of the BigInteger value.

**返回**

- this BigInteger converted to a `float`.
