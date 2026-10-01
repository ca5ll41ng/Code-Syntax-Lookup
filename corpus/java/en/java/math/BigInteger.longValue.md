---
id: "java-en-function-biginteger-longvalue"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.longValue"
signature: "public long longValue()"
title: "BigInteger.longValue"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.longValue

```java
public long longValue()
```

Converts this BigInteger to a `long`.  This
 conversion is analogous to a
 narrowing primitive conversion from `long` to
 `int` as defined in
 The Java Language Specification:
 if this BigInteger is too big to fit in a
 `long`, only the low-order 64 bits are returned.
 Note that this conversion can lose information about the
 overall magnitude of the BigInteger value as well as return a
 result with the opposite sign.

**返回**

- this BigInteger converted to a `long`.

**参见**

- #longValueExact()
